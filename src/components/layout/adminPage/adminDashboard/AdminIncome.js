import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Carousel } from 'react-bootstrap';
import '../../../CSS/adminPage/AdminDashboard.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

function ViewMyBooking() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='viewIncome-container'>
      <Row>
        <Col>
          <h1>#9801 inkomsten</h1>
        </Col>
        <Col lg='2' className='back-col'>
          <Link to='/admin-content/admin-dashboard'>Terug</Link>
        </Col>
      </Row>

      <Row className='viewIncome-content'>
        <Col lg='6'>
          <Card className='info-card'>
            <Card.Header as='h4'>Informatie</Card.Header>
            <Card.Body>
              <Row className='host-info'>
                <Row>
                  <h5>Verhuurder</h5>
                </Row>
                <Row>
                  <Col>
                    <h6>Voornaam</h6>
                  </Col>
                  <Col>
                    <p>Jan</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Naam</h6>
                  </Col>
                  <Col>
                    <p>Janssens</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>E-mailadres</h6>
                  </Col>
                  <Col>
                    <p>jan@email.com</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Telefoonnummer</h6>
                  </Col>
                  <Col>
                    <p>0123456789</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Rekeningnummer</h6>
                  </Col>
                  <Col>
                    <p>BE01 2345 6789 1234</p>
                  </Col>
                </Row>
              </Row>

              <Row className='acco-info'>
                <Row>
                  <h5>Pandgegevens</h5>
                </Row>
                <Row>
                  <Col>
                    <h6>ID</h6>
                  </Col>
                  <Col>
                    <p>#9801</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Titel</h6>
                  </Col>
                  <Col>
                    <p>Chalet Tropical</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Adres</h6>
                  </Col>
                  <Col>
                    <p>58, Màlaga</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Inkom verhuurder</h6>
                  </Col>
                  <Col>
                    <p>€</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Dagprijs</h6>
                  </Col>
                  <Col>
                    <p>€</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Commissie in %</h6>
                  </Col>
                  <Col>
                    <p>6%</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h6>Commissie in euro</h6>
                  </Col>
                  <Col>
                    <p>€</p>
                  </Col>
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
                      src={require('../../../img/accommodatie_01.jpeg')} //"/vc2-frontend/src/components/img/accommodatie_01.jpeg/800x400?text=First slide&bg=373940"
                      alt='First slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../../img/eetkamer.jpg')}
                      alt='Second slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../../img/keuken.jpg')}
                      alt='Third slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../../img/slaapkamer.jpg')}
                      alt='Fourth slide'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block'
                      src={require('../../../img/badkamer.jpg')}
                      alt='Fifth slide'
                    />
                  </Carousel.Item>
                </Carousel>
              </Row>
              <Row className='action-btns'>
                <Link className='' to='/dashboard/admin-dashboard'>
                  Accommodatie bekijken
                </Link>
              </Row>
              <Row className='action-btns'>
                <Link className='' to='/dashboard/admin-dashboard'>
                  Verhuurdersinfo
                </Link>
              </Row>
              <Row className='action-btns'>
                <Link className='' to='/dashboard/admin-dashboard'>
                  Afdrukken
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ViewMyBooking;
