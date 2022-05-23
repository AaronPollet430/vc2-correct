import React from 'react';
import '../../CSS/bookingPage/BookingConfirmationPage.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BookingConfirmation() {
  return (
    <div className='bookingConfirmation-container'>
      <Card>
        <Card.Header as='h5'>Gegevens bevestigen</Card.Header>
        <Card.Body>
          <Row className='accommodation-confirmation'>
            <Row>
              <h5>Reisgegevens</h5>
            </Row>
            <Row>
              <Col>Aankomstdatum</Col>
              <Col>07/07/2022</Col>
            </Row>

            <Row>
              <Col>Vertrekdatum</Col>
              <Col>17/07/2022</Col>
            </Row>

            <Row>
              <Col>Aantal personen</Col>
              <Col>5</Col>
            </Row>

            <Row>
              <Col>Annuleringsverzekering</Col>
              <Col>neen</Col>
            </Row>

            <Row>
              <Col>Extra's</Col>
              <Col>neen</Col>
            </Row>
          </Row>

          <Row className='user-confirmation'>
            <Row>
              <h5>Persoonlijke gegevens</h5>
            </Row>
            <Row>
              <Col>Naam</Col>
              <Col>Pollet</Col>
            </Row>

            <Row>
              <Col>Voornaam</Col>
              <Col>Aaron</Col>
            </Row>

            <Row>
              <Col>Telefoonnummer</Col>
              <Col>0491730584</Col>
            </Row>

            <Row>
              <Col>E-mailadres</Col>
              <Col>pollet_aaron@hotmail.com</Col>
            </Row>

            <Row>
              <Col>Adres</Col>
              <Col>Leeuwstraat 4, 9000 Gent</Col>
            </Row>
          </Row>

          <Row className='confirm-tot-price'>
            <Col>
              <h5>Totale prijs: € 1415,5</h5>
            </Col>
            <Col></Col>
          </Row>

          <Row className='bookingConfirmations-btns'>
            <Col>
              <Link to='/booking'>
                <button>Terug</button>
              </Link>
            </Col>
            <Col>
              <Link to='/payment'>
                <button>Bevestigen</button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookingConfirmation;
