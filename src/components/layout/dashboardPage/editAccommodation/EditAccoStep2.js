import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

function EditAccoStep2() {
  return (
    <div className='newAcco-content'>
      <h1>Accommodatie bewerken</h1>
      <div className='newAcco2-card'>
        <Card className='step2'>
          <Card.Header as='h5'>Gedetailleerde informatie</Card.Header>
          <Card.Body>
            <Row>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'>
                <Form.Label>
                  <p>Geef je accommodatie een leuke titel</p>
                </Form.Label>
                <Form.Control as='textarea' rows={1} />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'>
                <Form.Label>
                  <p>Geef een korte beschrijving over je accommodatie</p>
                </Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
            </Row>

            <Row>
              <p>Voor hoeveel gasten heb je ruimte?</p>
            </Row>
            <Row>
              <Col>
                <Form.Label>Maximum aantal personen</Form.Label>
              </Col>
              <Col className='data-input'>
                <Button>-</Button>
                <Form.Control type='number' />
                <Button>+</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Aantal slaapkamers</Form.Label>
              </Col>
              <Col className='data-input'>
                <Button>-</Button>
                <Form.Control type='number' />
                <Button>+</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Aantal bedden</Form.Label>
              </Col>
              <Col className='data-input'>
                <Button>-</Button>
                <Form.Control type='number' />
                <Button>+</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Aantal badkamers</Form.Label>
              </Col>
              <Col className='data-input'>
                <Button>-</Button>
                <Form.Control type='number' />
                <Button>+</Button>
              </Col>
            </Row>
            <Row className='btns'>
              <Col>
                <Link
                  to='/dashboard/edit-accommodation-step-1'
                  className='next-btn'>
                  Vorige
                </Link>
              </Col>
              <Col>
                <Link
                  to='/dashboard/edit-accommodation-step-3'
                  className='next-btn'>
                  Volgende
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EditAccoStep2;
