import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import '../../CSS/dashboardPage/Dashboard.css';
import '../../CSS/dashboardPage/UserProfile.css';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthdate: yup.string().required(),
  phoneNo: yup.string().required(),
  emailAddress: yup.string().required(),
  street: yup.string().required(),
  number: yup.string().required(),
  bus: yup.string().required(),
  zip: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
});

function UserProfilePage() {
  return (
    <div className='userProfileEdit-content'>
      <Row>
        <Col>
          <h1>Mijn profiel bewerken</h1>
        </Col>

        <Col className='back-btn'>
          <Link to='/user-content/user-profile'>Terug</Link>
        </Col>
      </Row>

      <div className='userProfileEdit-card'>
        <Card className='userProfileEdit'>
          <Card.Header as='h5'>Informatie</Card.Header>
          <Card.Body>
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: '',
                lastName: '',
                birthdate: '',
                phoneNo: '',
                emailAddress: '',
                street: '',
                number: '',
                bus: '',
                zip: '',
                city: '',
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
                    <Form.Group as={Col} controlId='validationFormik01'>
                      <Form.Label>Voornaam</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Voornaam'
                        disabled
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId='validationFormik01'>
                      <Form.Label>Naam</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Achternaam'
                        disabled
                      />
                    </Form.Group>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Group as={Col} md='3' controlId='validationFormik01'>
                      <Form.Label>Geboortedatum</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Geboortedatum'
                        name='birthdate'
                        value={values.birthdate}
                        onChange={handleChange}
                        isValid={touched.birthdate && !errors.birthdate}
                        isInvalid={!!errors.birthdate}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>
                        {errors.birthdate}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='3' controlId='validationFormik02'>
                      <Form.Label>Telefoonnummer</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Telefoonnummer'
                        name='number'
                        value={values.phoneNo}
                        onChange={handleChange}
                        isValid={touched.phoneNo && !errors.phoneNo}
                        isInvalid={!!errors.phoneNo}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>
                        {errors.emailAddress}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validationFormik02'>
                      <Form.Label>E-mailadres</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='E-mailadres'
                        name='emailAddress'
                        value={values.emailAddress}
                        onChange={handleChange}
                        isValid={touched.emailAddress && !errors.emailAddress}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                    <Form.Group as={Col} md='4' controlId='validationFormik03'>
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

                    <Form.Group as={Col} md='4' controlId='validationFormik04'>
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
                  <Row className='save-btn'>
                    <Link to='/dashboard/user-profile'>Opslaan</Link>
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

export default UserProfilePage;
