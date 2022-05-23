import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Nav, Button, Dropdown, Row, Col } from 'react-bootstrap';
import '../../../CSS/adminPage/AdminServices.css';

function AdminServices() {
  return (
    <div className='adminServices-container'>
      <div className='adminServices-content'>
        <Row>
          <Col>
            <h1>Diensten</h1>
          </Col>
          <Col className='addService-col'>
            <Link to='/dashboard/admin-add-service' className='addService-btn'>
              Nieuwe dienst
            </Link>
          </Col>
        </Row>
        <div className='transport-container'>
          <h4>Transportmiddelen</h4>

          <div className='transport-cards'>
            <Card className='bg-light text-white'>
              <Card.Img
                src={require('../../../img/costawheels.png')}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Row>
                  <Button
                    href='https://www.costawheelsrentalcars.com/'
                    target='_blank'>
                    Website
                  </Button>
                </Row>

                <Row>
                  <Button
                    href='https://www.costawheelsrentalcars.com/'
                    target='_blank'>
                    Meer info
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>

            <Card className='bg-light text-white'>
              <Card.Img
                src={require('../../../img/marbesol.png')}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Row>
                  <Button href='https://www.marbesol.com/' target='_blank'>
                    Website
                  </Button>
                </Row>

                <Row>
                  <Button href='https://www.marbesol.com/' target='_blank'>
                    Meer info
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>

            <Card className='bg-light text-white'>
              <Card.Img
                src={require('../../../img/sixt.png')}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Row>
                  <Button href='https://www.sixt.com/#/' target='_blank'>
                    Website
                  </Button>
                </Row>
                <Row>
                  <Button href='https://www.sixt.com/#/' target='_blank'>
                    Meer info
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className='cleaningServices-container'>
          <h4>Schoonmaakdiensten</h4>

          <div className='cleaningServices-cards'>
            <Card className='bg-light text-white'>
              <Card.Img
                src={require('../../../img/schoonmaakdienst.png')}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Row>
                  <Button href='https://axarclean.com/' target='_blank'>
                    Website
                  </Button>
                </Row>

                <Row>
                  <Button href='https://axarclean.com/' target='_blank'>
                    Meer info
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className='technicalServices-container'>
          <h4>Technische diensten</h4>

          <div className='technicalServices-cards'>
            <Card className='bg-light text-white'>
              <Card.Img
                src={require('../../../img/technischedienst.png')}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Row>
                  <Button href='https://www.sat-malaga.es/' target='_blank'>
                    Website
                  </Button>
                </Row>

                <Row>
                  <Button href='https://www.sat-malaga.es/' target='_blank'>
                    Meer info
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServices;
