import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import AdminMenu from '../layout/adminPage/AdminMenu';

const AdminContent = () => {
  return (
    <Fragment>
      <div className='admin-container'>
        <main>
          <Row>
            <Col lg='2'>
              <AdminMenu />
            </Col>
            <Col lg='10'>
              <Outlet></Outlet>
            </Col>
          </Row>
        </main>
      </div>
    </Fragment>
  );
};

export default AdminContent;