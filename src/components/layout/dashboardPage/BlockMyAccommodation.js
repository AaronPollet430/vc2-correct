import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Form } from 'react-bootstrap';
import '../../CSS/dashboardPage/MyAccommodations.css';

function BlockMyAcco() {
  return (
    <div className='blockMyAcco-content'>
      <Row>
        <Col>
          <h1>#accoid blokkeren</h1>
        </Col>
        <Col lg='2' className='addAcco-col'>
          <Link to='/dashboard/my-accommodation-detail' className='addAcco-btn'>
            Terug
          </Link>
        </Col>
      </Row>

      <Card>
        <Card.Header as='h5'>Gegevens</Card.Header>
        <Card.Body>
          <div className='block-container'>
            <Row>
              <Col>
                <Form.Label column lg={4}>
                  Begindatum
                </Form.Label>
                <Form.Control
                  className='mb-2'
                  type='text'
                  placeholder='Begindatum'
                />
              </Col>
              <Col>
                <Form.Label column lg={4}>
                  Einddatum
                </Form.Label>
                <Form.Control
                  className='mb-2'
                  type='text'
                  placeholder='Einddatum'
                />
              </Col>
            </Row>
            <Row>
              <Col lg='10'>
                <Form.Label>Titel</Form.Label>
                <Form.Control
                  className='mb-2'
                  type='text'
                  placeholder='Bv. zelfgebruik'
                />
              </Col>
              <Col className='block-btns' lg='1'>
                <Link to='/newAcco' className='delete-btn'>
                  -
                </Link>
              </Col>
              <Col className='block-btns' lg='1'>
                <Link to='/newAcco' className='add-btn'>
                  +
                </Link>
              </Col>
            </Row>
          </div>
          <Row lg='2' className='save-btn'>
            <Link to='/dashboard/my-accommodation-detail'>Opslaan</Link>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlockMyAcco;
