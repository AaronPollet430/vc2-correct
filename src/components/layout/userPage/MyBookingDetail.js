import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Carousel } from 'react-bootstrap';
import '../../CSS/userPage/MyBookings.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

function ViewMyBooking() {
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState('gen-info');
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='viewBooking-container'>
      <Row>
        <Col>
          <h1>Boeking</h1>
        </Col>
        <Col lg='2' className='back-col'>
          <Link to='/user-content/my-bookings'>Terug</Link>
        </Col>
      </Row>

      <Row className='viewBooking-content'>
        <Col lg='6'>
          <Card>
            <Card.Header as='h5'>Boeking informatie</Card.Header>
            <Card.Body>
              <Row className='accommodation-info'>
                <Row>
                  <h5>Reisgegevens</h5>
                </Row>
                <Row>
                  <Col>Boekingsnummer:</Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>Aankomstdatum:</Col>
                  <Col>07 / 07 / 2022</Col>
                </Row>

                <Row>
                  <Col>Vertrekdatum:</Col>
                  <Col>17 / 07 / 2022</Col>
                </Row>

                <Row>
                  <Col>Adres:</Col>
                  <Col>C. Jerez Perchet, 38, 29014 Málaga, Spain</Col>
                </Row>

                <Row>
                  <Col>Aantal personen:</Col>
                  <Col>5 personen</Col>
                </Row>

                <Row>
                  <Col>Annuleringsverzekering:</Col>
                  <Col>neen</Col>
                </Row>

                <Row>
                  <Col>Extra's:</Col>
                  <Col>neen</Col>
                </Row>
              </Row>

              <Row className='user-info'>
                <Row>
                  <h5>Persoonlijke gegevens</h5>
                </Row>
                <Row>
                  <Col>Naam: </Col>
                  <Col>Pollet</Col>
                </Row>

                <Row>
                  <Col>Voornaam:</Col>
                  <Col>Aaron</Col>
                </Row>

                <Row>
                  <Col>Telefoonnummer:</Col>
                  <Col>0491 73 05 84</Col>
                </Row>

                <Row>
                  <Col>E-mailadres:</Col>
                  <Col>pollet_aaron@hotmail.com</Col>
                </Row>

                <Row>
                  <Col>Adres:</Col>
                  <Col>Leeuwstraat 4, 9000 Gent</Col>
                </Row>
              </Row>

              <Row className='info-tot-price'>
                <Row>
                  <h5>Prijsgegevens</h5>
                </Row>
                <Row>
                  <Col>Prijs per nacht:</Col>
                  <Col>€ 132 / nacht </Col>
                </Row>
                <Row>
                  <Col>Korting(en):</Col>
                  <Col>5%</Col>
                </Row>
                <Row>
                  <Col>Betaald:</Col>
                  <Col>€ 1415,5</Col>
                </Row>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg='3' className=''>
          <Card className='actions-card'>
            <Card.Body>
              <Row>
                <Carousel
                  className='carousel'
                  activeIndex={index}
                  onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../img/accommodatie_01.jpeg')} //"/vc2-frontend/src/components/img/accommodatie_01.jpeg/800x400?text=First slide&bg=373940"
                      alt='First slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../img/eetkamer.jpg')}
                      alt='Second slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../img/keuken.jpg')}
                      alt='Third slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../img/slaapkamer.jpg')}
                      alt='Fourth slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../img/badkamer.jpg')}
                      alt='Fifth slide'
                    />
                  </Carousel.Item>
                </Carousel>
              </Row>
              <Row className='action-btns viewAcco-btn'>
                <Link
                  className=''
                  to='/homes/detail/7f28c5f9-d711-4cd6-ac15-d13d71abvv11'>
                  Accommodatie bekijken
                </Link>
              </Row>
              <Row className='action-btns print-btn'>
                <Link className='' to='/my-bookings'>
                  Boekingsgegevens afdrukken
                </Link>
              </Row>
              <Row className='action-btns cancelReq-btn'>
                <Link className='' to='/my-bookings'>
                  Annuleringsvoorwaarden
                </Link>
              </Row>
              <Row className='action-btns cancel-btn'>
                <Link className='' to='/my-bookings'>
                  Reis annuleren
                </Link>
              </Row>
            </Card.Body>
          </Card>

          <Card className='col contactPerson-card'>
            <Card.Header as='h5'>{t('contact.vragen')}</Card.Header>
            <Card.Body className='contactPerson-body'>
              <Card.Text>{t('contact.stelZe')}</Card.Text>
              <div className='contactPerson-info'>
                <Card.Text className='contactPerson-name'>
                  Jan Janssens
                </Card.Text>
                <Card.Text>+32 123 45 67 89</Card.Text>
                <Card.Text>jan.janssens@email.com</Card.Text>
              </div>
              <div className='contact-btn'>
                <Button variant='primary'>{t('contact.contact')}</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ViewMyBooking;
