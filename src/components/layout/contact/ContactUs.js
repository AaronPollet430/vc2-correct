import React from 'react';
import '../../CSS/contact/Contact.css';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function ContactUs() {
  return (
    <div className='contactUs-container'>
      <Card>
      <Card.Header>Contacteer ons</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Voornaam</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Voornaam"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>Achternaam</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Achternaam"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Jouw e-mailadres</Form.Label>
                <Form.Control type="email" placeholder="voorbeeld@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Jouw bericht</Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="Plaats hier jouw bericht" />
              </Form.Group>
            </Form>
          </Card.Text>
          <div className='contact-btn'>
          <Button variant="primary">Versturen</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactUs;