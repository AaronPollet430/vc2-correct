import React from 'react';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import '../../CSS/userPage/UserMenu.css';

const UserMenu = () => {
  return (
    <>
      <div className='user-menu'>
        <Nav
          defaultActiveKey='/user-content/my-bookings'
          className='flex-column mb-4'>
          <h3>Dag, Aaron!</h3>
          <Nav.Link href='/user-content/my-bookings'>Mijn boekingen</Nav.Link>
          <Nav.Link href='/user-content/my-favourites'>
            Mijn favorieten
          </Nav.Link>
        </Nav>
        <Nav className='user-profile-menu'>
          <Nav.Link href='/user-content/user-profile'>Mijn profiel</Nav.Link>
          <div className='logout-btn'>
            <Button>Uitloggen</Button>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default UserMenu;
