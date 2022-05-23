import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Tabs, Tab, Carousel } from 'react-bootstrap';
import '../../../CSS/adminPage/AdminDashboard.css';

function ViewAccoRequest() {
  const [key, setKey] = useState('gen-info');
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='accoReq-container'>
      <Row>
        <Col>
          <h1>Aanvraag publicatie</h1>
        </Col>
        <Col lg='2' className='back-col'>
          <Link to='/admin-content/admin-dashboard'>Terug</Link>
        </Col>
      </Row>

      <Row>
        <Col lg='8' className='info-col'>
          <Card className='info-card'>
            <Tabs
              id='controlled-tab-example'
              defaultActiveKey='gen-info'
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className='mb-3'>
              <Tab className='gen-tab' eventKey='gen-info' title='Algemeen'>
                <Row>
                  <Col lg='6'>
                    <Row>
                      <h6>Pandgegevens</h6>
                    </Row>
                    <Row>
                      <Col lg='4' className='data-title'>
                        <p>Titel</p>
                      </Col>
                      <Col className='data'>
                        <p>Moderne villa met buitenzwembad</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='4' className='data-title'>
                        <p>Beschrijving</p>
                      </Col>
                      <Col className='data'>
                        <p>
                          De villa heeft een zicht op de zee. Het strand is
                          slechts 1km ervan gelegen en 500m van de bushalte.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='4' className='data-title'>
                        <p>Type</p>
                      </Col>
                      <Col className='data'>
                        <p>Villa</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='4' className='data-title'>
                        <p>Adres</p>
                      </Col>
                      <Col className='data'>
                        <p>C. Cruz Verde 14, 29001 Málaga, Spanje</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col>
                    <Row>
                      <h6>Verhuurder</h6>
                    </Row>
                    <Row>
                      <Col lg='6' className='data-title'>
                        <p>Voornaam</p>
                      </Col>
                      <Col className='data'>
                        <p>Jan</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='6' className='data-title'>
                        <p>Naam</p>
                      </Col>
                      <Col className='data'>
                        <p>Janssens</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='6' className='data-title'>
                        <p>E-mailadres</p>
                      </Col>
                      <Col className='data'>
                        <p>jan@email.com</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='6' className='data-title'>
                        <p>Telefoonnummer</p>
                      </Col>
                      <Col className='data'>
                        <p>0123456789</p>
                      </Col>
                    </Row>
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
                        <p>4</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Aantal slaapkamers</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>4</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Aantal bedden</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>4</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg='8' className='data-title'>
                        <p>Aantal badkamers</p>
                      </Col>
                      <Col lg='4' className='data'>
                        <p>2</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col lg='7'>
                    <Row>
                      <h6>Faciliteiten</h6>
                    </Row>
                    <Row>
                      <ul>
                        <li>Zwembad</li>
                      </ul>
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
                    <p>€120,00</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Prijs per week</p>
                  </Col>
                  <Col className='data'>
                    <p>€840,00</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Korting per week</p>
                  </Col>
                  <Col className='data'>
                    <p>10%</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Prijs per maand</p>
                  </Col>
                  <Col className='data'>
                    <p>€3600,00</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg='4' className='data-title'>
                    <p>Korting per maand</p>
                  </Col>
                  <Col className='data'>
                    <p>20%</p>
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
                <Row>
                  <Col className='data-title'>
                    <p>-</p>
                  </Col>
                  <Col className='data-date'>
                    <p>-</p>
                  </Col>
                  <Col lg='2' className='data'>
                    <p>-</p>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey='photos-info' title="Foto's">
                <Row>
                  <p>Geen foto's beschikbaar</p>
                </Row>
              </Tab>
            </Tabs>
          </Card>
        </Col>

        <Col lg='3' className=''>
          <Card className='actions-card'>
            <Card.Header>
              <h4>Acties</h4>
            </Card.Header>
            <Card.Body>
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
              <Row className='decision-btns'>
                <Col lg='6' className='deny'>
                  <Link to='/dashboard/admin-dashboard'>Weigeren</Link>
                </Col>
                <Col lg='6' className='accept'>
                  <Link className='' to='/dashboard/admin-dashboard'>
                    Goedkeuren
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ViewAccoRequest;
