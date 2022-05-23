import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Nav,
  Button,
  Row,
  Col,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import '../../CSS/userPage/MyBookings.css';

function HostAccommodations() {
  return (
    <div className='myBookings-container'>
      <div className='myBookings-content'>
        <Row>
          <h1>Mijn boekingen</h1>
        </Row>

        <Row className='input-fields'>
          <Col className='search-col' lg='8'>
            <Form>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Zoeken</Button>
            </Form>
          </Col>
          <Col lg='2'>
            <DropdownButton id='dropdown-basic-button' title='Filters'>
              <Dropdown.Item href='#/action-1'>Alles</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Oude boekingen</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>
                Toekomstige boekingen
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col lg='2' m-0>
            <DropdownButton id='dropdown-basic-button' title='Sorteren'>
              <Dropdown.Item href='#/action-1'>A-Z</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Z-A</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Goedkoopste</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Duurste</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={require('../../img/accommodatie_01.jpeg')}
              alt='test'
            />
            <Card.Body>
              <Row>
                <Card.Title>Chalet Tropical</Card.Title>
              </Row>

              <Row>
                <Col className='info-title'>
                  <Row>Aankomstdatum:</Row>
                  <Row>Vertrekdatum:</Row>
                  <Row>Betaald:</Row>
                </Col>

                <Col>
                  <Row>07/07/2022</Row>
                  <Row>17/07/2022</Row>
                  <Row>€ 1415,5</Row>
                </Col>
              </Row>

              <Row className='seeMore-btn'>
                <Link to='/user-content/my-booking-detail'>Bekijken</Link>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HostAccommodations;
