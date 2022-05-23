import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Form } from 'react-bootstrap';
import '../../../CSS/adminPage/AdminUsers.css';

function EditUserRole() {
  return (
    <div className='editUserRole-content'>
      <Row>
        <Col>
          <h1>Gebruiker #ID: bewerken</h1>
        </Col>
        <Col className='back-btn'>
          <Link to='/'>Terug</Link>
        </Col>
      </Row>

      <Row>
        <Col lg='5'>
          <Card>
            <Card.Header>
              <h5>Gebruikersinformatie</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg='5' className='data-title'>
                  <p>Voornaam</p>
                </Col>
                <Col className='data'>
                  <p>Lorem ipsum</p>
                </Col>
              </Row>
              <Row>
                <Col lg='5' className='data-title'>
                  <p>Naam</p>
                </Col>
                <Col className='data'>
                  <p>Lorem ipsum</p>
                </Col>
              </Row>
              <Row>
                <Col lg='5' className='data-title'>
                  <p>Geboortedatum</p>
                </Col>
                <Col className='data'>
                  <p>Lorem ipsum</p>
                </Col>
              </Row>
              <Row>
                <Col lg='5' className='data-title'>
                  <p>E-mailadres</p>
                </Col>
                <Col className='data'>
                  <p>Lorem ipsum</p>
                </Col>
              </Row>
              <Row>
                <Col lg='5' className='data-title'>
                  <p>Telefoonnumer</p>
                </Col>
                <Col className='data'>
                  <p>Lorem ipsum</p>
                </Col>
              </Row>

              <Row>
                <Col lg='5' className='data-title'>
                  <p>Adres</p>
                </Col>
                <Col className='data'>
                  <p>Lorem ipsum</p>
                </Col>
              </Row>

              <Row>
                <Col lg='5' className='data-title'>
                  <p>Rol(len)</p>
                </Col>
                <Col className='data'>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className='mb-3'>
                        <Form.Check
                          inline
                          label='Huurder'
                          name='group1'
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label='Verhuurder'
                          name='group1'
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label='Admin'
                          name='group1'
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
              </Row>

              <Row className='action-btn'>
                <Link to='/'>Opslaan</Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditUserRole;
