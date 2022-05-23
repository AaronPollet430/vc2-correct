import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Nav, Button, Dropdown, Row } from 'react-bootstrap';
import '../../CSS/userPage/MyFavourites.css';

function Favourites() {
  return (
    <div className='favourites-container'>
      <div className='favourites-content'>
        <h1>Mijn favorieten</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../../img/accommodatie_01.jpeg")} />
          <Card.Body>
            <Row>
              <Card.Title>Chalet Tropical</Card.Title>
            </Row>

            <Row className='seeMore-btn'>
              <Link to='/homes'>
                Bekijken
              </Link>
            </Row>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
};

export default Favourites;