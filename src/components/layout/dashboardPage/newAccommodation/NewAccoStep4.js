import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col } from 'react-bootstrap';

function NewAccoStep4() {
  return (
    <div className='newAcco-content'>
      <h1>Nieuwe accommodatie</h1>
      <div className='newAcco4-card'>
        <Card className='step4'>
          <Card.Header as='h5'>Foto's</Card.Header>
          <Card.Body>
            <Row>
              <p>Upload hier onder foto's van de accommodatie</p>
            </Row>

            <Row className='row-addPic'>
              <div className='addPic'>Sleep hier je foto's</div>
            </Row>

            <Row>
              <ul>
                <li>Minstens 3 foto's</li>
                <li>Minstens x groot</li>
                <li>JPG formaat</li>
              </ul>
            </Row>
            <Row className='btns'>
              <Col>
                <Link to='/dashboard/add-accommodation-step-3'>Terug</Link>
              </Col>
              <Col>
                <Link to='/dashboard/add-accommodation-step-5'>Volgende</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NewAccoStep4;
