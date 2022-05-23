import React, { Button } from 'react';
import { Col, Row, Form, FloatingRow } from 'react-bootstrap';
import '../../CSS/bookingPage/Booking.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Link } from 'react-router-dom';
class Booking extends React.Component {
  state = {
    bookingData: {},
    isFirstNameValid: false,
    isLastNameValid: false,
    isStreetValid: false,
    isHouseNrValid: false,
    isBusNrValid: false,
    isPostalCodeValid: false,
    isCityValid: false,
    isCountryValid: false,
    isPhoneNumberValid: false,
    isEmailAddressValid: false,
    bookingFailed: false,
  };

  constructor(props) {
    super(props);
    this.initBookingData();
    this.initBindings();
  }

  initBookingData() {
    let voornaam = '';
    let achternaam = '';
    let straat = '';
    let huisnummer = '';
    let busnummer = '';
    let postcode = '';
    let gemeente = '';
    let land = '';
    let telnr = '';
    let emailadres = '';

    let serializedData = localStorage.getItem('reservation-data');
    let bookingObj = null;

    if (serializedData) {
      bookingObj = JSON.parse(serializedData);
    }
    if (bookingObj) {
      this.state = {
        bookingData: {
          start: new Date(bookingObj.checkInDate),
          end: new Date(bookingObj.checkOutDate),
          amountOfPeople: bookingObj.amountPeople,
          voornaam: voornaam,
          achternaam: achternaam,
          straat: straat,
          huisnummer: huisnummer,
          busnummer: busnummer,
          postcode: postcode,
          gemeente: gemeente,
          land: land,
          telnr: telnr,
          emailadres: emailadres,
        },
        isFirstNameValid: true,
        isLastNameValid: true,
        isStreetValid: true,
        isHouseNrValid: true,
        isBusNrValid: true,
        isPostalCodeValid: true,
        isCityValid: true,
        isCountryValid: true,
        isPhoneNumberValid: true,
        isEmailAddressValid: true,
        bookingFailed: true,
      };
    } else {
      this.state = {
        bookingData: {
          start: new Date(),
          end: new Date(),
          amountOfPeople: 2,
          voornaam: voornaam,
          achternaam: achternaam,
          straat: straat,
          huisnummer: huisnummer,
          busnummer: busnummer,
          postcode: postcode,
          gemeente: gemeente,
          land: land,
          telnr: telnr,
          emailadres: emailadres,
        },
        isFirstNameValid: true,
        isLastNameValid: true,
        isStreetValid: true,
        isHouseNrValid: true,
        isBusNrValid: true,
        isPostalCodeValid: true,
        isCityValid: true,
        isCountryValid: true,
        isPhoneNumberValid: true,
        isEmailAddressValid: true,
        bookingFailed: true,
      };
    }
  }

  initBindings() {
    this.submitBooking = this.submitBooking.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.FirstNameErrorMessage = this.FirstNameErrorMessage.bind(this);

    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.LastNameErrorMessage = this.LastNameErrorMessage.bind(this);

    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.StreetErrorMessage = this.StreetErrorMessage.bind(this);

    this.handleHouseNrChange = this.handleHouseNrChange.bind(this);
    this.HouseNrErrorMessage = this.HouseNrErrorMessage.bind(this);

    this.handleBusNrChange = this.handleBusNrChange.bind(this);
    this.BusNrErrorMessage = this.BusNrErrorMessage.bind(this);

    this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
    this.PostalCodeErrorMessage = this.PostalCodeErrorMessage.bind(this);

    this.handleCityChange = this.handleCityChange.bind(this);
    this.CityErrorMessage = this.CityErrorMessage.bind(this);

    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.CountryErrorMessage = this.CountryErrorMessage.bind(this);

    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.phoneNumberErrorMessage = this.phoneNumberErrorMessage.bind(this);

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.EmailAddressErrorMessage = this.EmailAddressErrorMessage.bind(this);

    this.isAllowedToSubmit = this.isAllowedToSubmit.bind(this);
    this.BookingFailedMessage = this.BookingFailedMessage.bind(this);
  }

  formatDate(date) {
    if (date) {
      console.log(date);
      const formattedDate = date.toDateString();
      const [, month, day, year] = formattedDate.split(' ');

      const ddMmmYyyy = `${day} ${month} ${year}`;
      return ddMmmYyyy;
    } else {
      return 'Geen datum gekozen';
    }
  }

  calculateAmountOfDays() {
    if (this.state.bookingData.start && this.state.bookingData.end) {
      let verschilInTijd =
        this.state.bookingData.end.getTime() -
        this.state.bookingData.start.getTime();
      // stackoverflow
      let aantaldagen = verschilInTijd / (1000 * 3600 * 24);
      return Math.ceil(aantaldagen);
    }
    return 0;
  }

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  submitBooking() {
    let tokenstr = localStorage.getItem('token');
    let authObj = null;
    if (tokenstr) {
      authObj = JSON.parse(tokenstr);
    }

    let data = this.parseJwt(authObj.token);

    console.log(data);
    console.log(this.props.home);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: this.state.bookingData.start,
        endDate: this.state.bookingData.end,
        userID: data.userId,
        homeID: '7f28c5f9-d711-4cd6-ac15-d13d71abvv11',
        voornaam: this.state.bookingData.voornaam,
        achternaam: this.state.bookingData.achternaam,
        straat: this.state.bookingData.straat,
        huisnummer: this.state.bookingData.huisnummer,
        busnummer: this.state.bookingData.busnummer,
        postcode: this.state.bookingData.postcode,
        gemeente: this.state.bookingData.gemeente,
        land: this.state.bookingData.land,
        telefoonnummer: this.state.bookingData.telefoonnummer,
        email: this.state.bookingData.emailadres,
      }),
    };
    fetch('http://localhost:9000/api/bookings', requestOptions)
      .then(function (response) {
        console.log(response.status); // toont status
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        window.location = '/bookingconfirmed';
        //clear reservation data
      })
      .catch((error) => {
        let currentState = this.state;
        currentState.bookingFailed = true;
        this.setState(currentState);
      });
  }

  handleFirstNameChange(event) {
    let currentState = this.state;
    currentState.bookingData.voornaam = event.target.value;
    currentState.isFirstNameValid = this.isFirstNameValid(
      currentState.bookingData.voornaam
    );
    this.setState(currentState);
  }

  handleLastNameChange(event) {
    let currentState = this.state;
    currentState.bookingData.achternaam = event.target.value;
    currentState.isLastNameValid = this.isLastNameValid(
      currentState.bookingData.achternaam
    );
    this.setState(currentState);
  }

  handleStreetChange(event) {
    let currentState = this.state;
    currentState.bookingData.straat = event.target.value;
    currentState.isStreetValid = this.isStreetValid(
      currentState.bookingData.straat
    );
    this.setState(currentState);
  }

  handleHouseNrChange(event) {
    let currentState = this.state;
    currentState.bookingData.huisnummer = event.target.value;
    currentState.isHouseNrValid = this.isHouseNrValid(
      currentState.bookingData.huisnummer
    );
    this.setState(currentState);
  }

  handleBusNrChange(event) {
    let currentState = this.state;
    currentState.bookingData.busnummer = event.target.value;
    currentState.isBusNrValid = this.isBusNrValid(
      currentState.bookingData.busnummer
    );
    this.setState(currentState);
  }

  handlePostalCodeChange(event) {
    let currentState = this.state;
    currentState.bookingData.postcode = event.target.value;
    currentState.isPostalCodeValid = this.isPostalCodeValid(
      currentState.bookingData.postcode
    );
    this.setState(currentState);
  }

  handleCityChange(event) {
    let currentState = this.state;
    currentState.bookingData.gemeente = event.target.value;
    currentState.isCityValid = this.isCityValid(
      currentState.bookingData.gemeente
    );
    this.setState(currentState);
  }

  handleCountryChange(event) {
    let currentState = this.state;
    currentState.bookingData.land = event.target.value;
    currentState.isCountryValid = this.isCountryValid(
      currentState.bookingData.gemeente
    );
    this.setState(currentState);
  }

  handlePhoneNumberChange(event) {
    let currentState = this.state;
    currentState.bookingData.telnr = event.target.value;
    currentState.isPhoneNumberValid = this.isPhoneNumberValid(
      currentState.bookingData.telnr
    );
    this.setState(currentState);
  }

  handleEmailAddressChange(event) {
    let currentState = this.state;
    currentState.bookingData.emailadres = event.target.value;
    console.log(event.target.value);
    currentState.isEmailAddressValid = this.isEmailAddressValid(
      currentState.bookingData.emailadres
    );
    console.log(currentState.isEmailAddressValid);
    this.setState(currentState);
  }

  // VALIDATIONS
  isFirstNameValid(name) {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(name)) {
      return true;
    }
    return false;
  }

  FirstNameErrorMessage() {
    if (!this.state.isFirstNameValid) {
      return 'Voornaam mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isLastNameValid(name) {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(name)) {
      return true;
    }
    return false;
  }

  LastNameErrorMessage() {
    if (!this.state.isLastNameValid) {
      return 'Achternaam mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isStreetValid(street) {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(street)) {
      return true;
    }
    return false;
  }

  StreetErrorMessage() {
    if (!this.state.isStreetValid) {
      return 'Straat mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isHouseNrValid(houseNr) {
    let reg = /^[A-Za-z0-9]+$/;
    if (reg.test(houseNr)) {
      return true;
    }
    return false;
  }

  HouseNrErrorMessage() {
    if (!this.state.isHouseNrValid) {
      return 'Huisnummer mag alleen uit cijfers en letters bestaan.';
    } else {
      return '';
    }
  }

  isBusNrValid(busNr) {
    let reg = /^[A-Za-z0-9]+$/;
    if (reg.test(busNr)) {
      return true;
    }
    return false;
  }

  BusNrErrorMessage() {
    if (!this.state.isBusNrValid) {
      return 'Busnummer mag alleen uit cijfers en letters bestaan.';
    } else {
      return '';
    }
  }

  isPostalCodeValid(postalCode) {
    let reg = /^[A-Za-z0-9]+$/;
    if (reg.test(postalCode)) {
      return true;
    }
    return false;
  }

  PostalCodeErrorMessage() {
    if (!this.state.isPostalCodeValid) {
      return 'Postcode mag alleen uit cijfers en letters bestaan.';
    } else {
      return '';
    }
  }

  isCityValid(city) {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(city)) {
      return true;
    }
    return false;
  }

  CityErrorMessage() {
    if (!this.state.isCityValid) {
      return 'Gemeente mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isCountryValid(country) {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(country)) {
      return true;
    }
    return false;
  }

  CountryErrorMessage() {
    if (!this.state.isCountryValid) {
      return 'Land mag alleen uit letters, koppeltekens en apostrof bestaan.';
    } else {
      return '';
    }
  }

  isPhoneNumberValid(phoneNumber) {
    console.log(phoneNumber);
    let pn = /^\d{10}$/;
    if (pn.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  }

  phoneNumberErrorMessage() {
    if (!this.state.isPhoneNumberValid) {
      return 'Dit is geen geldige telefoonnummer.';
    } else {
      return '';
    }
  }

  isEmailAddressValid(emailAddress) {
    console.log(emailAddress);
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

  isAllowedToSubmit() {
    if (
      !this.state.isFirstNameValid ||
      !this.state.isLastNameValid ||
      !this.state.isStreetValid ||
      !this.state.isHouseNrValid ||
      !this.state.isBusNrValid ||
      !this.state.isPostalCodeValid ||
      !this.state.isCityValid ||
      !this.state.isCountryValid ||
      !this.state.isPhoneNumberValid ||
      !this.state.isEmailAddressValid
    ) {
      return false;
    } else {
      return true;
    }
  }

  BookingFailedMessage() {
    if (!this.state.bookingFailed) {
      return 'Er is een fout opgetreden tijdens het boeken.';
    }
  }

  updateLocalStorageData() {
    let strLocalStorage = localStorage.getItem('reservation-data');
    let obj = null;
    if (strLocalStorage) {
      obj = JSON.parse(strLocalStorage);
    }

    if (obj) {
      obj.checkInDate = this.state.bookingData.start;
      obj.checkOutDate = this.state.bookingData.end;
      obj.amountPeople = this.state.bookingData.amountOfPeople;
    } else {
      obj = {
        destination: null, //todo current uit url if not exitst
        checkInDate: this.state.bookingData.start,
        checkOutDate: this.state.bookingData.end,
        amountPeople: this.state.bookingData.amountOfPeople,
      };
    }

    localStorage.setItem('reservation-data', JSON.stringify(obj));
  }

  handleCallback(start, end, Row) {
    this.setState({
      bookingData: {
        amountOfPeople: this.state.reservationData.amountOfPeople,
        start: start.toDate(),
        end: end.toDate(),
      },
    });
    this.updateLocalStorageData();
    console.log('HIER ', this.state);
  }

  render() {
    return (
      <div className='booking-container'>
        <Row>
          <Col></Col>
          <Col className='card1'>
            <div className='booking-input'>
              <div className='booking-title'>
                <h2>Mijn boeking</h2>
              </div>
              <div className='booking-body'>
                <div className='booking-info'>
                  <h5>1. Reisinformatie</h5>
                  <form>
                    <Row>
                      <Col>
                        <p>Aankomstdatum*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='arrival'
                          value={this.formatDate(
                            this.state.bookingData.start
                          ).toString()}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Vertrekdatum*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='departure'
                          value={this.formatDate(
                            this.state.bookingData.end
                          ).toString()}
                        />
                      </Col>
                    </Row>

                    <Row className='date-btn'>
                      <DateRangePicker
                        onCallback={this.handleCallback}
                        initialSettings={{
                          startDate: this.state.bookingData.start,
                          endDate: this.state.bookingData.end,
                        }}>
                        <button type='button' className='btn'>
                          Reisduur aanpassen
                        </button>
                      </DateRangePicker>
                    </Row>
                    <div className='nrppl'>
                      <Row>
                        <Col>
                          <p>Aantal personen*</p>
                        </Col>

                        <Col className='col-input'>
                          <button>-</button>
                          <Form.Control
                            type='number'
                            value={this.state.bookingData.amountOfPeople}
                            onChange={this.handleAantalPersoonsChange}
                          />
                          <button>+</button>
                        </Col>
                      </Row>

                      <Row>
                        <p>
                          <small>*Baby's (0-2j) zijn niet meegerekend.</small>
                        </p>
                      </Row>
                    </div>
                  </form>
                </div>
                <div className='booking-insurance-extras'>
                  <form>
                    <h5>2. Extra's</h5>
                    <Row>
                      <Col>
                        <p>Wil je een annuleringsverzekering?*</p>
                      </Col>
                      <Col>
                        <select>
                          <option value='none'>-</option>
                          <option value='Yes'>Ja</option>
                          <option value='No'>Neen</option>
                        </select>
                      </Col>
                    </Row>
                  </form>

                  <Row>
                    <p>Zijn er nog zaken die u nodig heeft?</p>
                  </Row>

                  <Row>
                    <Form.Control
                      as='textarea'
                      placeholder='Bv. Ik heb 2 baby bedden nodig.'
                      style={{ height: '100px' }}
                    />
                  </Row>
                </div>
                <div className='booking-holder'>
                  <h5>3. Mijn gegevens</h5>
                  <p>Vul je gegevens hieronder in.</p>
                  <form>
                    <Row>
                      <Col>
                        <p>Voornaam*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='firstName'
                          value={this.state.bookingData.voornaam}
                          onChange={this.handleFirstNameChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.FirstNameErrorMessage()}
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Achernaam*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='lastName'
                          value={this.state.bookingData.achternaam}
                          onChange={this.handleLastNameChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.LastNameErrorMessage()}
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Straat*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='street'
                          value={this.state.bookingData.straat}
                          onChange={this.handleStreetChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>{this.StreetErrorMessage()}</Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Nr*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='houseNo'
                          value={this.state.bookingData.huisnummer}
                          onChange={this.handleHouseNrChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.HouseNrErrorMessage()}
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Bus*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='busNo'
                          value={this.state.bookingData.busnummer}
                          onChange={this.handleBusNrChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>{this.BusNrErrorMessage()}</Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Postcode*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='postalCode'
                          value={this.state.bookingData.postcode}
                          onChange={this.handlePostalCodeChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.PostalCodeErrorMessage()}
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Woonplaats*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='city'
                          value={this.state.bookingData.gemeente}
                          onChange={this.handleCityChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>{this.CityErrorMessage()}</Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Land*</p>
                      </Col>

                      <Col>
                        <input
                          type='text'
                          name='country'
                          value={this.state.bookingData.land}
                          onChange={this.handleCountryChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.CountryErrorMessage()}
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>Telefoonnnummer*</p>
                      </Col>

                      <Col>
                        <input
                          type='number'
                          name='telno'
                          value={this.state.bookingData.telnr}
                          onChange={this.handlePhoneNumberChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.phoneNumberErrorMessage()}
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>E-mailadres*</p>
                      </Col>

                      <Col>
                        <input
                          type='email'
                          name='email'
                          value={this.state.bookingData.emailadres}
                          onChange={this.handleEmailAddressChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className='err-msg'>
                        {this.EmailAddressErrorMessage()}
                      </Col>
                    </Row>
                  </form>
                </div>

                <div className='booking-btn'>
                  <Link to='/payment'>
                    <button
                      type='button'
                      href='/payment'
                      className='btn btn-primary btn-block'>
                      Volgende
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col className='card2'>
            <div className='booking-overview'>
              <div className='overview-header-title'>
                <h4>Overzicht</h4>
              </div>

              <div className='overview-pic'>
                <img
                  src={require('../../img/accommodatie_01.jpeg')}
                  alt='test'
                />
              </div>
              <div className='overview-body'>
                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Vakantiehuis:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>{'Chalet Tropical'}</Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Locatie:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>
                    Malaga, Costa Del Sol, Spanje
                  </Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Aankomstdatum:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>{'07/07/2022'}</Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Vertrekdatum:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>{'17/07/2022'}</Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Aantal personen:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>{'5 personen'}</Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Aantal nachten:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>
                    {'10 nachten'} x €{'132'}
                  </Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Schoonmaakkosten:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>€{'170'}</Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Korting(en):</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>{5}%</Col>
                </Row>

                <Row>
                  <Col className='overview-title'>
                    <p>
                      <b>Annuleringsverzekering:</b>
                    </p>
                  </Col>
                  <Col className='overview-data'>nee</Col>
                </Row>

                <Row className='overview-totalPrice'>
                  <Col className='overview-title'>
                    <p>Totale prijs:</p>
                  </Col>
                  <Col className='overview-data'>€{'1415.5'}</Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Booking;
