import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/dashboardPage/NewAccommodation.css';
import { Card, Row, Col, ToggleButton } from 'react-bootstrap';

function NewAccoStep3() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='newAcco-content'>
      <h1>Nieuwe accommodatie</h1>
      <div className='newAcco3-card'>
        <Card className='step3/**'>
          <Card.Header as='h5'>Faciliteiten</Card.Header>
          <Card.Body>
            <Row>
              <p>Welke extra's heeft je accommodatie te bieden?</p>
            </Row>
            <Row>
              <Col className=''>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Zwembad
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Bubbelbad
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Jacuzzi
                </ToggleButton>
              </Col>
            </Row>

            <Row>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Sauna
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Stoomcabine
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Terras
                </ToggleButton>
              </Col>
            </Row>

            <Row>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Tuin
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Parkeerplaats
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  className='mb-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={checked}
                  value='1'
                  onChange={(e) => setChecked(e.currentTarget.checked)}>
                  Huisdieren
                </ToggleButton>
              </Col>
            </Row>

            <Row className='btns'>
              <Col>
                <Link to='/dashboard/add-accommodation-step-2'>Terug</Link>
              </Col>
              <Col>
                <Link to='/dashboard/add-accommodation-step-4'>Volgende</Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default NewAccoStep3;
