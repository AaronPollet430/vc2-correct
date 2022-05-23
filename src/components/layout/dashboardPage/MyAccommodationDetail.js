import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  DropdownButton,
  Form,
  Button,
  Tabs,
  Tab,
  Carousel,
} from 'react-bootstrap';
import '../../CSS/dashboardPage/MyAccommodations.css';

function MyAccommodationDetail() {
  const [key, setKey] = useState('gen-info');
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='myAccoDetail-container'>
      <Row>
        <Col>
          <h1>Accommodatie #</h1>
        </Col>
        <Col lg='2' className='block-col'>
          <Link to='/dashboard/block-accommodation' className='block-btn'>
            Blokkeren
          </Link>
        </Col>
        <Col lg='2' className='edit-col'>
          <Link to='/dashboard/edit-accommodation-step-1' className='edit-btn'>
            Bewerken
          </Link>
        </Col>
      </Row>

      <Row>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <h4>Maand</h4>
              </Col>
              <Col lg='2' className='filter'>
                <DropdownButton id='dropdown-basic-button' title='Filters'>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={`default-${type}`} className='mb-3'>
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`Boekingen`}
                        />
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`Geblokkeerd`}
                        />
                      </div>
                    ))}
                  </Form>
                </DropdownButton>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col></Col>
              <Col lg='2'>
                <h6>Legende</h6>
                <ul>
                  <li>Geboekt</li>
                  <li>Geblokkeerd</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>

      <Row>
        <Col lg='6' className='info-col'>
          <Card className='info-card'>
            <Tabs
              id='controlled-tab-example'
              defaultActiveKey='gen-info'
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className='mb-3'>
              <Tab eventKey='gen-info' title='Algemeen'>
                <Row>
                  <Col lg='3' className='data-title'>
                    <p>Titel</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='3' className='data-title'>
                    <p>Beschrijving</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='3' className='data-title'>
                    <p>Type</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='3' className='data-title'>
                    <p>Subtype</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='3' className='data-title'>
                    <p>Adres</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey='det-info' title='Details'>
                <Row>
                  <Col lg='5'>
                    <Row>
                      <h6>Deze accommodatie beschikt over:</h6>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Max. aantal gasten</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>20</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Aantal slaapkamers</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>5</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Aantal bedden</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>5</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Aantal badkamers</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>5</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg='7'>
                    <Row>
                      <h6>Faciliteiten:</h6>
                    </Row>
                  </Col>
                </Row>
              </Tab>
              <Tab className='prices-tab' eventKey='price-info' title='Prijzen'>
                <Row>
                  <h6>Algemene prijzen</h6>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Prijs per nacht</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Prijs per week</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Korting per week</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Prijs per maand</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Korting per maand</p>
                  </Col>
                  <Col className='data'>
                    <p>Lorem ipsum</p>
                  </Col>
                </Row>
                <Row className='otherDisc'>
                  <h6>Andere kortingen</h6>
                </Row>
                <Row>
                  <Col className='data-title'>
                    <p>Titel korting</p>
                  </Col>
                  <Col className='data-date'>
                    <p>Periode</p>
                  </Col>
                  <Col lg='2' className='data'>
                    <p>Korting</p>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Card>
        </Col>

        <Col lg='6' className='photos-col'>
          <Card>
            <Card.Header>
              <h4>Afbeeldingen</h4>
            </Card.Header>
            <Card.Body>
              <Carousel
                className='carousel'
                activeIndex={index}
                onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../img/accommodatie_01.jpeg')} //"/vc2-frontend/src/components/img/accommodatie_01.jpeg/800x400?text=First slide&bg=373940"
                    alt='First slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../img/eetkamer.jpg')}
                    alt='Second slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../img/keuken.jpg')}
                    alt='Third slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../img/slaapkamer.jpg')}
                    alt='Fourth slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../img/badkamer.jpg')}
                    alt='Fifth slide'
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyAccommodationDetail;
