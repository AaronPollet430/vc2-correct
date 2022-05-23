import React from 'react';
import {
  Card,
  Nav,
  Button,
  Dropdown,
  Row,
  Col,
  DropdownButton,
  Form,
} from 'react-bootstrap';
import '../../../CSS/adminPage/AdminUsers.css';

function AdminUsers() {
  return (
    <div className='adminUsers-container'>
      <div className='adminUsers-content'>
        <h1>Gebruikers</h1>

        <div className='users-container'>
          <Card>
            <Card.Header as='h5'>
              <Row>
                <Col>Resultaat: 1</Col>
                <Col lg='2'>
                  <DropdownButton id='dropdown-basic-button' title='Filters'>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className='mb-3'>
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Huurders`}
                          />

                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Verhuurders`}
                          />

                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Admins`}
                          />
                        </div>
                      ))}
                    </Form>
                  </DropdownButton>
                </Col>
                <Col lg='2' m-0>
                  <DropdownButton id='dropdown-basic-button' title='Sorteren'>
                    <Dropdown.Item href='#/action-1'>A-Z</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>Z-A</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Row className='users-titles'>
                <Col lg='1'>
                  <h6>Nr</h6>
                </Col>
                <Col lg='1'>
                  <h6>ID</h6>
                </Col>
                <Col lg='2'>
                  <h6>Naam</h6>
                </Col>
                <Col lg='2'>
                  <h6>Voornaam</h6>
                </Col>
                <Col lg='3'>
                  <h6>E-mailadres</h6>
                </Col>
                <Col lg='2'>
                  <h6>Actie</h6>
                </Col>
              </Row>

              <Row className='users-data'>
                <Col lg='1'>
                  <h6>1</h6>
                </Col>
                <Col lg='1'>
                  <h6>12345</h6>
                </Col>
                <Col lg='2'>
                  <h6>Janssens</h6>
                </Col>
                <Col lg='2'>
                  <h6>Jan</h6>
                </Col>
                <Col lg='3'>
                  <h6>jan.janssens@email.com</h6>
                </Col>
                <Col lg='2'>
                  <Button>Meer info</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
