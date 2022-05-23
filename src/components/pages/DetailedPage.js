import React, { Fragment, useState, useEffect } from 'react';
import ContactPerson from '../layout/detailedPage/ContactPerson';
import Information from '../layout/detailedPage/Information';
import Overview from '../layout/detailedPage/Overview';
import Photos from '../layout/detailedPage/Photos';
import { Row, Col } from 'react-bootstrap';
import '../CSS/DetailedPage.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DetailedPage = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  const [home, setHome] = useState([]);

  const getHomeDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:9000/api/homes/${id}`);
      setHome(response.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHomeDetails();
  });
  return (
    <Fragment>
      <div className='detailedPage-container'>
        <Row>
          <Col>
            <div className='accommodation-title'>
              <h1 className='text-left w-100 m-0'>{home.name}</h1>
            </div>
          </Col>
        </Row>
        <Row className='container-cards'>
          <Col>
            <div className='photos-container'>
              <Photos />
            </div>
          </Col>
          <Col>
            <div className='overview-container'>
              <Overview />
            </div>
          </Col>
        </Row>
        <Row className='container-cards'>
          <Col>
            <div className='information-container'>
              <Information {...home} />
            </div>
          </Col>
          <Col>
            <div className='contactPerson-container'>
              <ContactPerson />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default DetailedPage;
