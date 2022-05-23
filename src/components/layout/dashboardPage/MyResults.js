import React from 'react';
import { Card, Nav, Button, Row, Col, Dropdown } from 'react-bootstrap';
import '../../CSS/dashboardPage/MyResults.css';

function MyResultsPage() {
  return (
    <div className='dashboard-container'>
      <div className='myResults-content'>
        <h1>Mijn resultaten</h1>
        <Card>
          <Card.Header as='h5'>
            <Col>
              <h4>Inkomstenoverzicht</h4>
            </Col>

            <Col className='dropdown-btn'>
              <Dropdown className='d-inline m-0'>
                <Dropdown.Toggle id='dropdown-autoclose-true'>
                  Overzicht
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#'>Totaaloverzicht</Dropdown.Item>
                  <Dropdown.Item href='#'>Maandoverzicht</Dropdown.Item>
                  <Dropdown.Item href='#'>Jaaroverzicht</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Card.Header>

          <Card.Body>
            <Row className='summary-titles'>
              <Col lg='2'></Col>
              <Col>Bruto</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Januari
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Februari
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Maart
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                April
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Mei
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Juni
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Juli
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Augustus
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                September
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                Oktober
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                November
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
            <Row>
              <Col lg='2' className='col-titles'>
                December
              </Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
              <Col>Tekst</Col>
            </Row>
          </Card.Body>
        </Card>

        <Row>
          <Col lg='5'>
            <Card className='circle-diagram'>
              <Card.Header as='h5'>
                <h4>Pie chart</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <img
                      src={require('../../img/cirkeldiagram.png')}
                      alt='test'
                    />
                  </Col>

                  <Col className='legende'>
                    <Row>
                      <h5>Legende</h5>
                    </Row>
                    <Row>
                      <Col>Kleur</Col>
                      <Col>Waarde</Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='7'>
            <Card className='graph'>
              <Card.Header as='h5'>
                <h4>Grafiek</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg='7' className='graph-pic'>
                    <img src={require('../../img/grafiek.png')} alt='test' />
                  </Col>

                  <Col lg='4' className='graph-legende'>
                    <Row>
                      <h5>Legende</h5>
                    </Row>
                    <Row>
                      <Col>Kleur</Col>
                      <Col>Waarde</Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyResultsPage;
