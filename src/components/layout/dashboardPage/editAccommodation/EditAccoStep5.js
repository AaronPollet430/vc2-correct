import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';

function EditAccoStep5() {
  return (
    <div className='newAcco-content editAcco-content'>
      <h1>Accommodatie bewerken</h1>
      <div className='newAcco5-card'>
        <Card className='step5'>
          <Card.Header as='h5'>Prijzen en kortingen</Card.Header>
          <Card.Body>
            <Row>
              <p>Vul de gegevens in.</p>
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
            <Row className='otherDisc-titel mb-2'>
              <h6>Andere kortingen</h6>
            </Row>
            <div className='disc-container'>
              <Row>
                <Col>
                  <Form.Label column lg={4}>
                    Titel
                  </Form.Label>
                  <Form.Control
                    className='mb-2'
                    type='text'
                    placeholder='Bv. zomerkorting'
                  />
                </Col>
              </Row>
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
              <Row className='otherDisc'>
                <Col lg='2'>
                  <Form.Label>Symbool</Form.Label>
                  <Form.Select defaultValue='Choose...'>
                    <option>€</option>
                    <option>%</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label column lg={4}>
                    Waarde
                  </Form.Label>
                  <Form.Control type='text' placeholder='Waarde' />
                </Col>
                <Col className='disc-btns' lg='2'>
                  <Link to='/newAcco' className='delete-btn'>
                    -
                  </Link>
                </Col>
                <Col className='disc-btns' lg='2'>
                  <Link to='/newAcco' className='add-btn'>
                    +
                  </Link>
                </Col>
              </Row>
            </div>
            <Row className='btns'>
              <Col>
                <Link to='/dashboard/edit-accommodation-step-4'>Vorige</Link>
              </Col>
              <Col>
                <Link to='/dashboard/edit-accommodation-step-6'>Nalezen</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EditAccoStep5;
