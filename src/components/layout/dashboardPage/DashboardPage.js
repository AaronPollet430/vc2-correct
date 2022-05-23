import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../../CSS/dashboardPage/Dashboard.css';

function DashboardPage() {
  return (
    <div className='dashboard-content'>
      <h1>Mijn dashboard</h1>
      <Card>
        <Card.Header as='h5'>Weekoverzicht</Card.Header>
        <Card.Body>
          <Row className='days-title'>
            <Col>
              <h5>Maandag</h5>
            </Col>
            <Col>
              <h5>Dinsdag</h5>
            </Col>
            <Col>
              <h5>Woensdag</h5>
            </Col>
            <Col>
              <h5>Donderdag</h5>
            </Col>
            <Col>
              <h5>Vrijdag</h5>
            </Col>
            <Col>
              <h5>Zaterdag</h5>
            </Col>
            <Col>
              <h5>Zondag</h5>
            </Col>
          </Row>
          <Row className='agenda-data'>
            <Col>
              <h5>Boeking</h5>
            </Col>
            <Col>
              <h5>Boeking</h5>
            </Col>
            <Col>
              <h5>Boeking</h5>
            </Col>
            <Col>
              <h5>Boeking</h5>
            </Col>
            <Col>
              <h5>Boeking</h5>
            </Col>
            <Col>
              <h5>Boeking</h5>
            </Col>
            <Col className='test'>
              <h5>Boeking</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DashboardPage;
