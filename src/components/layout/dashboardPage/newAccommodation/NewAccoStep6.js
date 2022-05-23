import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col, Carousel } from 'react-bootstrap';

function NewAccoStep6() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='newAcco-content'>
      <h1>Nieuwe accommodatie</h1>
      <div className='newAcco6-card'>
        <Card className='step6'>
          <Card.Header as='h5'>Gegevens bevestigen</Card.Header>
          <Card.Body>
            <Row>
              <Carousel
                className='carousel'
                activeIndex={index}
                onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../../img/accommodatie_01.jpeg')} //"/vc2-frontend/src/components/img/accommodatie_01.jpeg/800x400?text=First slide&bg=373940"
                    alt='First slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../../img/eetkamer.jpg')}
                    alt='Second slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../../img/keuken.jpg')}
                    alt='Third slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../../img/slaapkamer.jpg')}
                    alt='Fourth slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={require('../../../img/badkamer.jpg')}
                    alt='Fifth slide'
                  />
                </Carousel.Item>
              </Carousel>
            </Row>
            <Row>
              <Col lg='5' className='confirm-titles'>
                <p>Titel</p>
              </Col>

              <Col className='confirm-data'>
                <p>Lorem</p>
              </Col>
            </Row>

            <Row>
              <Col lg='5' className='confirm-titles'>
                <p>Beschrijving</p>
              </Col>

              <Col className='confirm-data'>
                <p></p>
              </Col>
            </Row>

            <Row>
              <Col lg='5' className='confirm-titles'>
                <p>Adres</p>
              </Col>

              <Col className='confirm-data'>
                <p></p>
              </Col>
            </Row>

            <Row>
              <Col lg='5' className='confirm-titles'>
                <p>Gedetailleerde informatie</p>
              </Col>

              <Col className='confirm-data'>
                <p></p>
              </Col>
            </Row>

            <Row>
              <Col lg='5' className='confirm-titles'>
                <p>Faciliteiten</p>
              </Col>

              <Col className='confirm-data'>
                <p></p>
              </Col>
            </Row>

            <Row>
              <Col lg='5' className='confirm-titles'>
                <p>Prijzen</p>
              </Col>

              <Col className='confirm-data'>
                <p></p>
              </Col>
            </Row>

            <Row className='btns'>
              <Col>
                <Link to='/dashboard/add-accommodation-step-5'>Terug</Link>
              </Col>
              <Col>
                <Link to='/dashboard/my-accommodation-detail'>Voltooien</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NewAccoStep6;
