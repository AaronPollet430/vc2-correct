import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import '../../CSS/DetailedPage.css';
import { Link } from 'react-router-dom';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

class OverviewComponent extends React.Component {
  state = {
    reservationData: {},
  };

  constructor(props) {
    super(props);

    this.initBasicReservationData();
    this.initBindings();
  }

  initBasicReservationData() {
    let startdate = new Date();
    let enddate = new Date();
    enddate.setDate(enddate.getDate() + 1);

    // const resevationData = {
    //   destination: destination,
    //   checkInDate: checkInDate,
    //   checkOutDate: checkOutDate,
    //   amountPeople: amountPeople
    // }

    let serializedData = localStorage.getItem('reservation-data');
    let reservationObj = null;

    if (serializedData) {
      reservationObj = JSON.parse(serializedData);
    }
    if (reservationObj) {
      this.state = {
        reservationData: {
          start: new Date(reservationObj.checkInDate),
          end: new Date(reservationObj.checkOutDate),
          amountOfPeople: reservationObj.amountPeople,
        },
      };
    } else {
      this.state = {
        reservationData: {
          start: startdate,
          end: enddate,
          amountOfPeople: 0,
        },
      };
    }
  }

  // Bereken het aantal geboekte dagen
  calculateAmountOfDays() {
    if (this.state.reservationData.start && this.state.reservationData.end) {
      let verschilInTijd =
        this.state.reservationData.end.getTime() -
        this.state.reservationData.start.getTime();
      // stackoverflow
      let aantaldagen = verschilInTijd / (1000 * 3600 * 24);
      return Math.ceil(aantaldagen);
    }
    return 0;
  }

  initBindings() {
    this.handleCallback = this.handleCallback.bind(this);
    this.submitReservatie = this.submitReservatie.bind(this);
    this.handleAantalPersoonsChange =
      this.handleAantalPersoonsChange.bind(this);
  }

  formatDate(date) {
    if (date) {
      console.log(date);
      const formattedDate = date.toDateString();
      const [, month, day, year] = formattedDate.split(' ');

      const ddMmmYyyy = `${day}-${month}-${year}`;
      return ddMmmYyyy;
    } else {
      return 'Geen datum gekozen';
    }
  }

  //TODO enkel submit toelaten als er in het reservatie object alles correct is ingevuld
  submitReservatie(event) {
    let reservationStr = localStorage.getItem('reservation-data');
    let reservation = JSON.parse(reservationStr);
    reservation.checkInDate = this.state.reservationData.start;
    reservation.checkOutDate = this.state.reservationData.end;
    reservation.amountPeople = this.state.reservationData.amountOfPeople;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    reservation.id = id;
    localStorage.setItem('reservation-data', JSON.stringify(reservation));
    window.location = '/booking';
  }

  updateLocalStorageData() {
    let strLocalStorage = localStorage.getItem('reservation-data');
    let obj = null;
    if (strLocalStorage) {
      obj = JSON.parse(strLocalStorage);
    }

    if (obj) {
      obj.checkInDate = this.state.reservationData.start;
      obj.checkOutDate = this.state.reservationData.end;
      obj.amountPeople = this.state.reservationData.amountOfPeople;
    } else {
      obj = {
        destination: null, //todo current uit url if not exitst
        checkInDate: this.state.reservationData.start,
        checkOutDate: this.state.reservationData.end,
        amountPeople: this.state.reservationData.amountOfPeople,
      };
    }

    localStorage.setItem('reservation-data', JSON.stringify(obj));
  }

  handleAantalPersoonsChange(event) {
    let currentStateReservationData = this.state.reservationData;
    currentStateReservationData.amountOfPeople = event.target.value;
    this.setState(currentStateReservationData);
    this.updateLocalStorageData();
  }

  // Updatet de start- en einddatum van de reservering
  handleCallback(start, end, label) {
    this.setState({
      reservationData: {
        amountOfPeople: this.state.reservationData.amountOfPeople,
        start: start.toDate(),
        end: end.toDate(),
      },
    });
    this.updateLocalStorageData();
  }

  render(pricePerDay) {
    return (
      <Card className='rcol overview-card'>
        {/* <DateRangePicker onChange={onChange} value={value} /> */}
        <Card.Header>
          <Row className='header-form'>
            <Col>
              <Form.Group className='mb-1'>
                <Form.Label>
                  <h6>Aankomst</h6>
                </Form.Label>
                <Form.Control
                  type='text'
                  readOnly
                  placeholder='Van'
                  value={this.formatDate(this.state.reservationData.start)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-1'>
                <Form.Label>
                  <h6>Vertrek</h6>
                </Form.Label>
                <Form.Control
                  type='text'
                  readOnly
                  placeholder='Tot en met'
                  value={this.formatDate(this.state.reservationData.end)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='cal-row'>
            <DateRangePicker
              onCallback={this.handleCallback}
              initialSettings={{
                startDate: this.state.reservationData.start,
                endDate: this.state.reservationData.end,
              }}>
              <button className='btn'>Reisduur aanpassen</button>
            </DateRangePicker>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Row>
              <Form.Group className='nrOfPpl mb-3'>
                <Row>
                  <Col>
                    <Form.Label>Aantal personen*</Form.Label>
                  </Col>
                  <Col className='col-input'>
                    <Form.Control
                      type='number'
                      value={this.state.reservationData.amountOfPeople}
                      onChange={this.handleAantalPersoonsChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.Text className='text-muted'>
                    <small>*Kinderen van 0-2 jaar zijn niet meegerekend.</small>
                  </Form.Text>
                </Row>
              </Form.Group>
            </Row>
            <Row>
              <div className='price-info'>
                <h6>Prijsinformatie</h6>
                <Row>
                  <Col>
                    <ul>
                      <li>Aantal personen</li>
                      <li>Aantal nachten</li>
                    </ul>
                  </Col>
                  <Col className='price-info-data'>
                    <ul>
                      <li>{this.state.reservationData.amountOfPeople}</li>
                      <li>{this.calculateAmountOfDays()}</li>
                    </ul>
                  </Col>
                </Row>
                <Row className='totalPrice'>
                  <Col>
                    <h5>Prijs:</h5>
                  </Col>
                  <Col>
                    <h5>€{132 * this.calculateAmountOfDays() + 170}</h5>
                  </Col>
                </Row>
                <Row>
                  <small>*incl. €170 schoonmaakkosten en btw</small>
                </Row>
              </div>
            </Row>
            <Row className='booking-row'>
              <Link to='/booking'>
                <Button
                  type='button'
                  onClick={this.submitReservatie}
                  variant='primary'>
                  Boeken
                </Button>
              </Link>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default OverviewComponent;
