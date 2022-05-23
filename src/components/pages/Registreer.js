import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/account/Registreer.css';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

class Registreer extends React.Component {
  constructor(props) {
    super(props)
    this.initRegistrationData()
    this.initBindings()
  }

  // Triggert rerender in front end
  state = {
    registrationData: {},
    isFirstNameValid: false,
    isLastNameValid: false,
    isEmailAddressValid: false,
    isPasswordValid: false,
    isPasswordConfirmed: false,
    isPhoneNumberValid: false,
    registrationFailed: false,
  }

  initRegistrationData() {
    let voornaam = ''
    let achternaam = ''
    let emailAddress = ''
    let password = ''
    let passwordConfirmation = ''
    let phoneNumber = ''

    this.state = {
      registrationData: {
        voornaam: voornaam,
        achternaam: achternaam,
        emailAddress: emailAddress,
        password: password,
        passwordConfirmation: passwordConfirmation,
        phoneNumber: phoneNumber,
      },
      isFirstNameValid: true,
      isLastNameValid: true,
      isEmailAddressValid: true,
      isPasswordValid: true,
      isPasswordConfirmed: true,
      isPhoneNumberValid: true,
      registrationFailed: true,
    };
  }
  
  // Zorgt ervoor dat de methodes beschikbaar zijn in de templates
  initBindings() {
    this.submitRegistration = this.submitRegistration.bind(this)

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.FirstNameErrorMessage = this.FirstNameErrorMessage.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.LastNameErrorMessage = this.LastNameErrorMessage.bind(this)

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this)
    this.EmailAddressErrorMessage = this.EmailAddressErrorMessage.bind(this)

    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.PasswordErrorMessage = this.PasswordErrorMessage.bind(this)

    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this)
    this.PasswordConfirmationErrorMessage = this.PasswordConfirmationErrorMessage.bind(this)
    
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
    this.phoneNumberErrorMessage = this.phoneNumberErrorMessage.bind(this)

    this.isAllowedToSubmit = this.isAllowedToSubmit.bind(this)
    this.registrationFailedMessage = this.registrationFailedMessage.bind(this)
  }

  submitRegistration() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        voornaam: this.state.registrationData.voornaam,
        achternaam: this.state.registrationData.achternaam,
        email: this.state.registrationData.emailAddress,
        password: this.state.registrationData.password,
        passwordBevestiging: this.state.registrationData.passwordConfirmation,
        telefoonnummer: this.state.registrationData.phoneNumber
      })
    };
    fetch('http://localhost:9000/api/gebruikers/registration', requestOptions)
      .then(function(response) {
      console.log(response.status); // toont status
      if (!response.ok) {
          throw new Error("HTTP status " + response.status);
      }
      return response.json();
      })
      .then(data => {
        localStorage.setItem("token", JSON.stringify(data));
        window.location = '/'
      })
      .catch(error => {
        let currentState = this.state;
        currentState.registrationFailed = true;
        this.setState(currentState)
      });
  }

  handleFirstNameChange(event) {
    let currentState = this.state;
    currentState.registrationData.voornaam = event.target.value;
    currentState.isFirstNameValid = this.isFirstNameValid(currentState.registrationData.voornaam);
    this.setState(currentState);
  }

  handleLastNameChange(event) {
    let currentState = this.state;
    currentState.registrationData.achternaam = event.target.value;
    currentState.isLastNameValid = this.isLastNameValid(currentState.registrationData.achternaam);
    this.setState(currentState);
  }

  handleEmailAddressChange(event) {
    let currentState = this.state;
    currentState.registrationData.emailAddress = event.target.value;
    currentState.isEmailAddressValid = this.isEmailAddressValid(currentState.registrationData.emailAddress);
    this.setState(currentState);
  }

  handlePasswordChange(event) {
    let currentState = this.state;
    currentState.registrationData.password = event.target.value;
    currentState.isPasswordValid = this.isPasswordValid(currentState.registrationData.password);
    this.setState(currentState);
  }

  handlePasswordConfirmationChange(event) {
    let currentState = this.state;
    currentState.registrationData.passwordConfirmation = event.target.value;
    currentState.isPasswordConfirmed = this.isPasswordConfirmed(currentState.registrationData.password, currentState.registrationData.passwordConfirmation);
    this.setState(currentState);
  }

  handlePhoneNumberChange(event) {
    let currentState = this.state;
    currentState.registrationData.phoneNumber = event.target.value;
    currentState.isPhoneNumberValid = this.isPhoneNumberValid(currentState.registrationData.phoneNumber);
    this.setState(currentState);
  }

  // VALIDATIONS
  isFirstNameValid(name) {
    let reg =  /^[a-zA-Z]+$/;
    if (reg.test(name)) {
      return true;
    }
    return false;
  }

  FirstNameErrorMessage() {
    if (!this.state.isFirstNameValid) {
      return 'Naam mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isLastNameValid(name) {
    let reg =  /^[a-zA-Z]+$/;
    if (reg.test(name)) {
      return true;
    }
    return false;
  }

  LastNameErrorMessage() {
    if (!this.state.isLastNameValid) {
      return 'Naam mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isEmailAddressValid(emailAddress) {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      return true;
    }
    return false;
  }

  EmailAddressErrorMessage() {
    if (!this.state.isEmailAddressValid) {
      return 'E-mailadres is niet correct.';
    } else {
      return '';
    }
  }

  isPasswordValid(password) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  PasswordErrorMessage() {
    if (!this.state.isPasswordValid) {
      return 'Het wachtwoord moet minstens een lengte van 8 karakters met 1 kleine letter, 1 grote letter, 1 cijfer en 1 speciale teken bevatten';
    } else {
      return '';
    }
  }

  isPasswordConfirmed(p1, p2) {
    if (p1 === p2) {
      return true;
    } else {
      return false;
    }
  }

  PasswordConfirmationErrorMessage() {
    if(!this.state.isPasswordConfirmed) {
      return 'Het herhaalde wachtwoord is niet juist.';
    } else {
      return '';
    }
  }

  isPhoneNumberValid(phoneNumber) {
    let pn = /^\d{10}$/;
    if (pn.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  }

  phoneNumberErrorMessage() {
    if(!this.isPhoneNumberValid) {
      return 'Dit is geen geldige telefoonnummer.';
    } else {
      return '';
    }
  }

  isAllowedToSubmit() {
    if (!this.state.isFirstNameValid || !this.state.isLastNameValid || !this.state.isEmailAddressValid || !this.state.isPasswordValid || !this.state.isPasswordConfirmed || !this.state.isPhoneNumberValid) {
      return false;
    } else {
      return true;
    }
  }

  registrationFailedMessage() {
    if (!this.state.registrationFailed) {
      return 'Er is een fout opgetreden tijdens het registreren.';
    }
  }

  /* const [user, setUser] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    password: '',
    password2: '',
  });

  const { voornaam, achternaam, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // registreer via methode
    console.log('Registreer Submit');
  };
  */

  render() {
    return (
      <main className='registration-main'>
        <div className='registration-container'>
        <Card>
            <Card.Header>
              <h1>Registreren</h1>
            </Card.Header>
              <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Voornaam</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="voornaam"
                    placeholder="Voornaam"
                    value={this.state.registrationData.voornaam}
                    onChange={this.handleFirstNameChange}
                  />
                  <p>{this.FirstNameErrorMessage()}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Achternaam</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="achternaam"
                    placeholder="Achternaam"
                    value={this.state.registrationData.achternaam}
                    onChange={this.handleLastNameChange}
                  />
                  <p>{this.LastNameErrorMessage()}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E-mailadres</Form.Label> {/* '{useTranslation("Inloggen.email")}' */}
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={this.state.registrationData.emailAddress}
                    onChange={this.handleEmailAddressChange}
                    placeholder="voorbeeld@email.com" />
                    <p>{this.EmailAddressErrorMessage()}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Wachtwoord</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    value={this.state.registrationData.password}
                    onChange={this.handlePasswordChange}
                    placeholder="Wachtwoord" />
                    <p>{this.PasswordErrorMessage()}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Bevestig wachtwoord</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name='password2'
                    value={this.state.registrationData.passwordConfirmation}
                    onChange={this.handlePasswordConfirmationChange}
                    placeholder="Bevestig wachtwoord" />
                    <p>{this.PasswordConfirmationErrorMessage()}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Label>Telefoonnummer</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="phoneNumber"
                    placeholder="0123456789"
                    value={this.state.registrationData.phoneNumber}
                    onChange={this.handlePhoneNumberChange}
                  />
                  <p>{this.phoneNumberErrorMessage()}</p>
                </Form.Group>

                <Row>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Ik aanvaard de algemene voorwaarden en privacybeleid" />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Ik wens nieuwsbrieven te ontvangen" />
                  </Form.Group>
                </Row>
                
                <Row>
                  <p>{this.registrationFailedMessage()}</p>
                </Row>

                <Row className='registration-btn'>
                  <Button
                    disabled={!this.isAllowedToSubmit()}
                    type='button'
                    onClick={this.submitRegistration}
                    className='btn btn-primary btn-block'
                  >
                    Registreer
                  </Button>
                </Row>
                
                <Link to="/inloggen">
                  Heb je al een account? Log je hier in
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </main>
    );
  };
};

export default Registreer;
