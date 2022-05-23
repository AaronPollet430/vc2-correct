import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Nav, Button, Row, Col, Dropdown } from 'react-bootstrap';
import '../../CSS/dashboardPage/Dashboard.css';
import '../../CSS/dashboardPage/UserProfile.css';

function UserProfilePage() {
  return (
    <div className='dashboard-container'>
      <div className='userProfile-content'>
        <Row>
          <Col>
            <h1>Mijn profiel</h1>
          </Col>
          <Col className='edit-btn'>
            <Link to='/user-content/edit-user-profile'>Bewerken</Link>
          </Col>
        </Row>

        <Card>
          <Card.Header as='h5'>Informatie</Card.Header>

          <Card.Body>
            <Row>
              <Col className='info-titles'>
                <Row>Naam:</Row>
                <Row>Voornaam:</Row>
                <Row>Geboortedatum:</Row>
                <Row>E-mailadres:</Row>
                <Row>Telefoonnummer:</Row>
                <Row>Straat:</Row>
                <Row>Nr:</Row>
                <Row>Bus:</Row>
                <Row>Postcode:</Row>
                <Row>Gemeente:</Row>
                <Row>Land:</Row>
              </Col>
              <Col>
                <Row>Pollet</Row>
                <Row>Aaron</Row>
                <Row>11/03/96</Row>
                <Row>pollet@aaron.com</Row>
                <Row>0491730584</Row>
                <Row>Leeuwstraat</Row>
                <Row>4</Row>
                <Row>/</Row>
                <Row>9000</Row>
                <Row>Gent</Row>
                <Row>België</Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default UserProfilePage;
