import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import '../../CSS/dashboardPage/MyAccommodations.css';
import axios from 'axios';

function HostAccommodations() {
  const [accommodaties, setAccommodaties] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getAccommodatiesVerhuurder = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await axios.get('http://localhost:9000/api/homes?limit=2');
      setAccommodaties(res.data.data);
      console.log(accommodaties);
    } catch (error) {
      setError('fetch failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccommodatiesVerhuurder();
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='myAccommodations-content'>
        <Row>
          <Col>
            <h1>Mijn accommodaties</h1>
          </Col>
          <Col className='addAcco-col'>
            <Link
              to='/dashboard/add-accommodation-step-1'
              className='addAcco-btn'>
              Nieuwe accommodatie
            </Link>
          </Col>
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
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className='mb-3'>
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />
                  </div>
                ))}
              </Form>
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
          <Card className='acco-card'>
            <Card.Body>
              <img src={require('../../img/accommodatie_01.jpeg')} alt='test' />

              <div className='acco-info'>
                <Row>
                  <Row>
                    <h4>Chalet Tropical</h4>
                  </Row>
                  <Col>
                    <Row>Status:</Row>
                    <Row>Laatste boeking:</Row>
                    <Row>Volgende boeking:</Row>
                    <Row>Contactpersoon:</Row>
                  </Col>

                  <Col>
                    <Row>Vrij</Row>
                    <Row>Geen</Row>
                    <Row>16/07/2022 - 22/07/2022</Row>
                    <Row>Jan De Businessman</Row>
                  </Col>

                  <Col>
                    <Row>Prijs per nacht:</Row>
                    <Row>Prijs per week:</Row>
                    <Row>Prijs per maand:</Row>
                  </Col>

                  <Col>
                    <Row>€ 0,00</Row>
                    <Row>€ 0,00</Row>
                    <Row>€ 0,00</Row>
                  </Col>

                  <Col className='card-btn'>
                    <Link to='/dashboard/my-accommodation-detail'>
                      Bekijken
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HostAccommodations;
