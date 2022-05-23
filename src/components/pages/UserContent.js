import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import UserMenu from '../layout/userPage/UserMenu';

const UserContent = () => {
  return (
    <Fragment>
      <div className='admin-container'>
        <main>
          <Row>
            <Col lg="2">
              <UserMenu />
            </Col>
            <Col>
              <Outlet></Outlet>
            </Col>
          </Row>
        </main>
      </div>
    </Fragment>
  );
};

export default UserContent;