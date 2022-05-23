import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import '../../../CSS/adminPage/AdminServices.css';

function ViewService() {
  return (
    <div className='viewService-content'>
      <Row>
        <Col>
          <h1>Bedrijfsnaam</h1>
        </Col>
        <Col className='back-btn'>
          <Link to='/dashboard/admin-services'>Terug</Link>
        </Col>
      </Row>

      <Card>
        <Card.Img
          src={require('../../../img/costawheels.png')}
          alt='Card image'
        />
        <Card.Body>
          <Row>
            <Col lg='5' className='data-title'>
              <p>Type dienst</p>
            </Col>
            <Col className='data'>
              <p>Lorem ipsum</p>
            </Col>
          </Row>
          <Row>
            <Col lg='5' className='data-title'>
              <p>Bedrijfsnaam</p>
            </Col>
            <Col className='data'>
              <p>Lorem ipsum</p>
            </Col>
          </Row>
          <Row>
            <Col lg='5' className='data-title'>
              <p>Website</p>
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
              <p>Telefoonnummer</p>
            </Col>
            <Col className='data'>
              <p>Lorem ipsum</p>
            </Col>
          </Row>

          <Row className='action-btns'>
            <Col className='delete-btn'>
              <Link to='/'>Verwijderen</Link>
            </Col>
            <Col className='edit-btn'>
              <Link to='/dashboard/admin-edit-service'>Bewerken</Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewService;
