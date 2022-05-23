import React from 'react';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import '../../CSS/dashboardPage/Dashboard.css';

const DashboardMenu = () => {
  return (
    <>
      <div className='dashboard-menu'>
        <Nav
          defaultActiveKey='/dashboard/host-dashboard'
          className='flex-column mb-4'>
          <h3>Dag, Jan!</h3>
          <Nav.Link href='/dashboard/host-dashboard'>Mijn dashboard</Nav.Link>
          <Nav.Link href='/dashboard/my-accommodations'>
            Mijn accommodaties
          </Nav.Link>
          <Nav.Link href='/dashboard/my-results'>Mijn resultaten</Nav.Link>
        </Nav>
        <Nav className='user-profile-menu'>
          <Nav.Link href='/dashboard/user-profile'>Mijn profiel</Nav.Link>
          <div className='user-role'>
            Ik ben
            <Dropdown className='d-inline mx-2'>
              <Dropdown.Toggle id='dropdown-autoclose-true'>
                huurder
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

export default DashboardMenu;
