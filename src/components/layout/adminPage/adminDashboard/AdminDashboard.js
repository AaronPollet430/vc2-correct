import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
} from 'react-bootstrap';
import '../../../CSS/adminPage/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className='adminDashboard-container'>
      <div className='adminIncome-container'>
        <h1>Mijn dashboard</h1>
        <Card className='mb-5'>
          <Card.Header as='h5'>
            <Row>
              <Col>Inkomsten</Col>
              <Col lg='2' className='sort'>
                <DropdownButton id='dropdown-basic-button' title='Sorteren'>
                  <Dropdown.Item href='#/action-1'>Verhuurder</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Recentste</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>Oudste</Dropdown.Item>
                  <Dropdown.Item href='#/action-4'>
                    Grootste bedrag
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-5'>
                    Kleinste bedrag
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row className='income-titles'>
              <Col lg='1' className='m-0 income-col'>
                <h6>ID</h6>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <h6>Verhuurder</h6>
              </Col>
              <Col lg='3' className='m-0 income-col'>
                <h6>Titel pand</h6>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <h6>Datum ontvangst</h6>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <h6>Commissie</h6>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <h6>Acties</h6>
              </Col>
            </Row>

            <Row className='income-data'>
              <Col lg='1' className='m-0 income-col'>
                <p>#2609</p>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <p>Jan Janssens</p>
              </Col>
              <Col lg='3' className='m-0 income-col'>
                <p>Chalet Tropical</p>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <p>20/05/2022</p>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <p>€</p>
              </Col>
              <Col lg='2' className='m-0 income-col'>
                <Link to='/admin-content/admin-income'>Bekijken</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <div className='requests-container'>
        <Card>
          <Card.Header as='h5'>
            <Row>
              <Col>Aanvragen</Col>
              <Col lg='2' className='filter'>
                <DropdownButton id='dropdown-basic-button' title='Filters'>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={``} className='mb-3'>
                        <Form.Check type={type} id={``} label={`Publicatie`} />
                        <Form.Check type={type} id={``} label={`Aanpassing`} />
                      </div>
                    ))}
                  </Form>
                </DropdownButton>
              </Col>
              <Col lg='2' className='sort'>
                <DropdownButton id='dropdown-basic-button' title='Sorteren'>
                  <Dropdown.Item href='#/action-1'>Recentste</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Oudste</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row className='requests-titles'>
              <Col lg='2' className='m-0 req-col'>
                <h6>Verhuurder</h6>
              </Col>
              <Col lg='4' className='m-0 req-col'>
                <h6>Titel pand</h6>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <h6>Soort aanvraag</h6>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <h6>Datum aanvraag</h6>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <h6>Acties</h6>
              </Col>
            </Row>

            <Row className='requests-data'>
              <Col lg='2' className='m-0 req-col'>
                <p>Jan Janssens</p>
              </Col>
              <Col lg='4' className='m-0 req-col'>
                <p>Moderne villa met buitenzwembad</p>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <p>Publicatie</p>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <p>20/05/2022</p>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <Link to='/admin-content/accommodation-request'>Bekijken</Link>
              </Col>
            </Row>

            <Row className='requests-data'>
              <Col lg='2' className='m-0 req-col'>
                <p>Jan Janssens</p>
              </Col>
              <Col lg='4' className='m-0 req-col'>
                <p>Chalet Tropical</p>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <p>Aanpassing</p>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <p>20/05/2022</p>
              </Col>
              <Col lg='2' className='m-0 req-col'>
                <Link to='/admin-content/accommodation-request'>Bekijken</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
