import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  accoType: yup.string().required(),
  street: yup.string().required(),
  number: yup.string().required(),
  bus: yup.string().required(),
  zip: yup.string().required(),
  city: yup.string().required(),
  region: yup.string().required(),
  country: yup.string().required(),
});

function NewAccoStep1() {
  return (
    <div className='newAcco-content'>
      <h1>Nieuwe accommodatie</h1>
      <div className='newAcco-card'>
        <Card className='step1'>
          <Card.Header as='h5'>Basisinformatie</Card.Header>
          <Card.Body>
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                accoType: '',
                accoSubType: '',
                street: '',
                number: '',
                bus: '',
                zip: '',
                city: '',
                region: '',
                country: '',
              }}>
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className='mb-3'>
                    <Form.Group as={Col} md='6' controlId='validationFormik01'>
                      <Form.Label>Verhuren of verkopen?</Form.Label>
                      <Form.Select
                        aria-label='Default select example'
                        title='Left-aligned but right aligned when large screen'>
                        <option value='rent'>Verhuren</option>
                        <option value='sell' disabled>
                          Verkopen
                        </option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validationFormik01'>
                      <Form.Label>Type accommodatie</Form.Label>
                      <Form.Select aria-label='Default select example'>
                        <option>Selecteer uw type</option>
                        <option value='house'>Huis</option>
                        <option value='apartment'>Appartement</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group as={Col} md='8' controlId='validationFormik01'>
                      <Form.Label>Straat</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Straat'
                        name='street'
                        value={values.street}
                        onChange={handleChange}
                        isValid={touched.street && !errors.street}
                        isInvalid={!!errors.street}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>
                        {errors.street}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='2' controlId='validationFormik02'>
                      <Form.Label>Nummer</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Nr'
                        name='number'
                        value={values.number}
                        onChange={handleChange}
                        isValid={touched.number && !errors.number}
                        isInvalid={!!errors.number}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>
                        {errors.number}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='2' controlId='validationFormik02'>
                      <Form.Label>Bus</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Bus'
                        name='bus'
                        value={values.bus}
                        onChange={handleChange}
                        isValid={touched.bus && !errors.bus}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group as={Col} md='4' controlId='validationFormik05'>
                      <Form.Label>Postcode</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Postcode'
                        name='zip'
                        value={values.zip}
                        onChange={handleChange}
                        isInvalid={!!errors.zip}
                      />

                      <Form.Control.Feedback type='invalid'>
                        {errors.zip}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='8' controlId='validationFormik03'>
                      <Form.Label>Gemeente</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Gemeente'
                        name='city'
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                      />

                      <Form.Control.Feedback type='invalid'>
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Group as={Col} md='6' controlId='validationFormik04'>
                      <Form.Label>Regio</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Regio'
                        name='region'
                        value={values.region}
                        onChange={handleChange}
                        isInvalid={!!errors.region}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.region}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md='6' controlId='validationFormik04'>
                      <Form.Label>Land</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Land'
                        name='region'
                        value={values.country}
                        onChange={handleChange}
                        isInvalid={!!errors.country}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.country}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className='next-btn'>
                    <Link
                      to='/dashboard/add-accommodation-step-2'
                      className='next-btn'>
                      Volgende
                    </Link>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NewAccoStep1;
