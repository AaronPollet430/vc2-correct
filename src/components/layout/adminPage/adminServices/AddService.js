import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/adminPage/AdminServices.css';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  company: yup.string().required(),
  website: yup.string().required(),
});

function AddService() {
  return (
    <div className='addService-content'>
      <Row>
        <Col>
          <h1>Dienst toevoegen</h1>
        </Col>
        <Col lg='2' className=''>
          <Link to='/dashboard/admin-services' className=''>
            Terug
          </Link>
        </Col>
      </Row>

      <div className='addService-card'>
        <Card className=''>
          <Card.Header as='h5'>Dienstinformatie</Card.Header>
          <Card.Body>
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                company: '',
                website: '',
                emailAddress: '',
                phoneNo: '',
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
                  <Row>
                    <p>Vul de ontbrekende gegevens in.</p>
                  </Row>
                  <Row className='mb-3'>
                    <Col lg='4'>
                      <Form.Group controlId='validationFormik01'>
                        <Form.Label>Type dienst</Form.Label>
                        <Form.Select
                          aria-label='Default select example'
                          title='Left-aligned but right aligned when large screen'>
                          <option value='transport'>Transport</option>
                          <option value='cleaning'>Schoonmaakdienst</option>
                          <option value='technical'>Technische dienst</option>
                          <option value='other'>Andere</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg='8'>
                      <Form.Group controlId='validationFormik01'>
                        <Form.Label>Bedrijfsnaam</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Bedrijfsnaam'
                          name='street'
                          value={values.company}
                          onChange={handleChange}
                          isValid={touched.company && !errors.company}
                          isInvalid={!!errors.company}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                          {errors.company}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className='mb-3'>
                    <Form.Group controlId='validationFormik01'>
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='URL'
                        name='street'
                        value={values.website}
                        onChange={handleChange}
                        isValid={touched.website && !errors.website}
                        isInvalid={!!errors.website}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid'>
                        {errors.website}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className='mb-3'>
                    <Col lg='8'>
                      <Form.Group controlId='validationFormik01'>
                        <Form.Label>E-mailadres</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='bedrijfs@email.com'
                          name='street'
                          value={values.emailAddress}
                          onChange={handleChange}
                          isValid={touched.emailAddress && !errors.emailAddress}
                          isInvalid={!!errors.emailAddress}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                          {errors.emailAddress}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col lg='4'>
                      <Form.Group controlId='validationFormik02'>
                        <Form.Label>Telefoonnummer</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Nr'
                          name='number'
                          value={values.phoneNo}
                          onChange={handleChange}
                          isValid={touched.phoneNo && !errors.phoneNo}
                          isInvalid={!!errors.phoneNo}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>
                          {errors.phoneNo}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Form.Group controlId='formFileMultiple' className='mb-3'>
                      <Form.Label>Foto</Form.Label>
                      <Form.Control type='file' multiple />
                    </Form.Group>
                  </Row>

                  <Row className='add-btn'>
                    <Link to='/dashboard/admin-services' className=''>
                      Toevoegen
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

export default AddService;
