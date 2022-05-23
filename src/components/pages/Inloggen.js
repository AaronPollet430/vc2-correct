import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/account/Login.css';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

class Inloggen extends React.Component {
  constructor(props) {
    super(props);
    this.initLoginData();
    this.initBindings();
  }

  // Triggert rerender in front endHh1$HHAA

  initLoginData() {
    let emailAddress = '';
    let password = '';

    this.state = {
      loginData: {
        emailAddress: emailAddress,
        password: password,
      },
      isEmailaddressValid: true,
      isPasswordValid: true,
      loginFailed: false,
    };
  }

  // Zorgt ervoor dat de methodes beschikbaar zijn in de templates
  initBindings() {
    this.submitLogin = this.submitLogin.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.EmailAddressErrorMessage = this.EmailAddressErrorMessage.bind(this);
    this.PasswordErrorMessage = this.PasswordErrorMessage.bind(this);
    this.isAllowedToSubmit = this.isAllowedToSubmit.bind(this);
    this.loginFailedMessage = this.loginFailedMessage.bind(this);
  }

  submitLogin() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.loginData.emailAddress,
        password: this.state.loginData.password,
      }),
    };
    fetch('http://localhost:9000/api/gebruikers/login', requestOptions)
      .then(function (response) {
        console.log(response.status); // toont status
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data));
        window.location = '/dashboard/host-dashboard';
      })
      .catch((error) => {
        let currentState = this.state;
        currentState.loginFailed = true;
        this.setState(currentState);
      });
  }

  handleEmailAddressChange(event) {
    let currentState = this.state;
    currentState.loginData.emailAddress = event.target.value;
    currentState.isEmailaddressValid = this.isEmailaddressValid(
      currentState.loginData.emailAddress
    );
    this.setState(currentState);
  }

  handlePasswordChange(event) {
    let currentState = this.state;
    currentState.loginData.password = event.target.value;
    currentState.isPasswordValid = this.isPasswordValid(
      currentState.loginData.password
    );
    this.setState(currentState);
  }

  // VALIDATIONS
  isEmailaddressValid(emailAddress) {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      return true;
    }
    return false;
  }

  isPasswordValid(password) {
    let regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  EmailAddressErrorMessage() {
    if (!this.state.isEmailaddressValid) {
      return '{useTranslation("Inloggen.emailIncor")}';
    } else {
      return '';
    }
  }

  PasswordErrorMessage() {
    if (!this.state.isPasswordValid) {
      return '{useTranslation("Inloggen.wachtwoordIncor")}';
    } else {
      return '';
    }
  }

  isAllowedToSubmit() {
    if (!this.state.isEmailaddressValid || !this.state.isPasswordValid) {
      return false;
    } else {
      return true;
    }
  }

  loginFailedMessage() {
    if (this.state.loginFailed) {
      return '{useTranslation("Inloggen.eenfoutje")}';
    }
  }

  render() {
    return (
      <main className='login-main'>
        <div className='login-container'>
          <Card>
            <Card.Header>
              <h1>Inloggen</h1>{/* {t('inloggen.titel')} */}
            </Card.Header>
              <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E-mailadres</Form.Label> {/* '{useTranslation("Inloggen.email")}' */}
                  <Form.Control
                    type="email"
                    name="email"
                    value={this.state.loginData.emailAddress}
                    onChange={this.handleEmailAddressChange}
                    placeholder="voorbeeld@email.com" />
                    <p>{this.EmailAddressErrorMessage()}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Wachtwoord</Form.Label> {/* '{useTranslation("Inloggen.ww")}' */}
                  <Form.Control
                    type="password"
                    value={this.state.loginData.password}
                    onChange={this.handlePasswordChange}
                    placeholder="wachtwoord" />
                    <p>{this.PasswordErrorMessage()}</p>
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Onthoud gegevens" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Link to="/">
                      Wachtwoord vergeten?
                    </Link>
                  </Col>
                </Row>
                
                <Row>
                  <p>{this.loginFailedMessage()}</p>
                </Row>
                <Row className='login-btn'>
                  <Button
                    disabled={!this.isAllowedToSubmit()}
                    type='button'
                    onClick={this.submitLogin}
                    className='btn btn-primary btn-block'
                  >
                    Inloggen {/* '{useTranslation("Inloggen.inlog")}' */}
                  </Button>
                </Row>
                
                <Link to="/registreer">
                  Nog geen account? Registreer je hier
                </Link>
              </Form>
              
            </Card.Body>
          </Card>
        </div>
      </main>
    );
  };
}

export default Inloggen;
