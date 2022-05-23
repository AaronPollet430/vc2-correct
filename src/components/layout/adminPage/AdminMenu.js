import React from 'react';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import '../../CSS/adminPage/AdminMenu.css';

const AdminMenu = () => {
  return (
    <>
      <div className='admin-menu'>
        <Nav
          defaultActiveKey='/admin-content/admin-dashboard'
          className='flex-column mb-4'>
          <h3>Dag, gebruiker!</h3>
          <Nav.Link href='/admin-content/admin-dashboard'>
            Mijn dashboard
          </Nav.Link>
          <Nav.Link href='/admin-content/admin-services'>Diensten</Nav.Link>
          <Nav.Link href='/admin-content/admin-users-overview'>
            Gebruikers
          </Nav.Link>
        </Nav>
        <Nav className='user-profile-menu'>
          <Nav.Link href='/dashboard/user-profile'>Mijn profiel</Nav.Link>
          <div className='user-role'>
            Ik ben
            <Dropdown className='d-inline mx-2'>
              <Dropdown.Toggle id='dropdown-autoclose-true'>
                admin
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='/user-content/my-bookings'>
                  huurder
                </Dropdown.Item>
                <Dropdown.Item href='/dashboard/host-dashboard'>
                  verhuurder
                </Dropdown.Item>
                <Dropdown.Item href='/admin-content/admin-dashboard'>
                  admin
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className='logout-btn'>
            <Button>Uitloggen</Button>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default AdminMenu;
