import React, { Fragment } from 'react';
import DashboardMenu from '../layout/dashboardPage/DashboardMenu';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
      <div className='dashboard-container'>
        <main>
          <Row>
            <Col lg='2'>
              <DashboardMenu />
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

export default Dashboard;
