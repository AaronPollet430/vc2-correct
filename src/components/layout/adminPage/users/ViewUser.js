import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import '../../../CSS/adminPage/AdminUsers.css';

function ViewUser() {
  return (
    <div className='viewUser-content'>
      <Row>
        <Col>
          <h1>Gebruiker #ID</h1>
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
                  <p>Lorem ipsum</p>
                </Col>
              </Row>

              <Row className='action-btn'>
                <Link to='/'>Rollen bewerken</Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg='5'>
          <Card>
            <Card.Header>
              <h5>Eigendommen (aantal)</h5>
            </Card.Header>
            <Card.Body>
              <Row className='acco-titles'>
                <Col lg='1' className='m-0'>
                  <h6>Nr</h6>
                </Col>
                <Col lg='2' className='m-0'>
                  <h6>ID</h6>
                </Col>
                <Col lg='6' className='m-0'>
                  <h6>Titel pand</h6>
                </Col>
                <Col lg='3' className='m-0'>
                  <h6>Actie</h6>
                </Col>
              </Row>

              <Row className='acco-data'>
                <Col lg='1' className='m-0 income-col'>
                  <p>1</p>
                </Col>
                <Col lg='2' className='m-0 income-col'>
                  <p>#1234</p>
                </Col>
                <Col lg='6' className='m-0 income-col'>
                  <p>Gezellig penthouse met jacuzzi</p>
                </Col>
                <Col lg='3' className='m-0 income-col'>
                  <Link to='/'>Bekijken</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ViewUser;
