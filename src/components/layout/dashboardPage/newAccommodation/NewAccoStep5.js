import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';

function NewAccoStep5() {
  return (
    <div className='newAcco-content'>
      <h1>Nieuwe accommodatie</h1>
      <div className='newAcco5-card'>
        <Card className='step5'>
          <Card.Header as='h5'>Prijs</Card.Header>
          <Card.Body>
            <Row>
              <p>Vul de gegevens in. Deze kunnen later nog aangepast worden.</p>
            </Row>
            <Row className='ppn'>
              <Form.Label column lg={4}>
                Prijs per nacht*
              </Form.Label>
              <Col>
                <InputGroup className='mb-2'>
                  <InputGroup.Text>€</InputGroup.Text>
                  <FormControl id='inlineFormInputGroup' placeholder='0,00' />
                </InputGroup>
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={4}>
                Korting per week
              </Form.Label>
              <Col lg='2' className='mb-2'>
                <Form.Select defaultValue='Choose...'>
                  <option>€</option>
                  <option>%</option>
                </Form.Select>
              </Col>
              <Col className='mb-2'>
                <Form.Control placeholder='Waarde' />
              </Col>
            </Row>

            <Row className='ppw'>
              <Form.Label column lg={4}>
                Prijs per week
              </Form.Label>
              <Col>
                <InputGroup className='mb-2'>
                  <InputGroup.Text>€</InputGroup.Text>
                  <FormControl id='inlineFormInputGroup' placeholder='0,00' />
                </InputGroup>
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={4}>
                Korting per maand
              </Form.Label>
              <Col lg='2' className='mb-2'>
                <Form.Select defaultValue='Choose...'>
                  <option>€</option>
                  <option>%</option>
                </Form.Select>
              </Col>
              <Col className='mb-2'>
                <Form.Control placeholder='Waarde' />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={4}>
                Prijs per maand
              </Form.Label>
              <Col>
                <InputGroup className='mb-2'>
                  <InputGroup.Text>€</InputGroup.Text>
                  <FormControl id='inlineFormInputGroup' placeholder='0,00' />
                </InputGroup>
              </Col>
            </Row>
            <Row className='btns'>
              <Col>
                <Link to='/dashboard/add-accommodation-step-4'>Terug</Link>
              </Col>
              <Col>
                <Link to='/dashboard/add-accommodation-step-6'>Nalezen</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NewAccoStep5;
