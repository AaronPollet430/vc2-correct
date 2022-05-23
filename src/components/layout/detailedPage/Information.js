import React, { useState } from 'react';
import { Tabs, Tab, Col, Row, Card } from 'react-bootstrap';
import '../../CSS/DetailedPage.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

function Information({
  id,
  name,
  description,
  haspool,
  hasParking,
  hasWifi,
  petsAllowed,
  hasTV,
  type,
  pricePerDay,
  nrOfBedrooms,
  nrOfBeds,
  nrOfBathrooms,
  maxPeople,
  deposit,
  thumbnail,
  address_id,
  city,
  region,
  country,
  score,
  user_id,
}) {
  const [key, setKey] = useState('algemeneInfo');
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f1f39849d0514cec55bd4ec28a915173',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  const { t, i18n } = useTranslation();
  return (
    <Card className='information-card'>
      <Card.Body>
        <Tabs
          id='controlled-tab-example'
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className='mb-3'>
          <Tab eventKey='algemeneInfo' title='Algemene Informatie'>
            <Row>
              <Col>
                <p className='infotitels'>
                  {t('Information.locatie')}
                  <br />
                  <br />
                  {t('Information.prijzen')}
                  <br />
                  <br />
                  Schoonmaakkosten
                  <br />
                  <br />
                  {t('Information.slaapkamer')}
                  <br />
                  {t('Information.bedden')}
                  <br />
                  {t('Information.badkamer')}
                </p>
              </Col>
              <Col>
                <p className='info-tekst'>
                  {city} {region} {country}
                  <br />€{pricePerDay}/nacht
                  <br />€{pricePerDay * 7}/week
                  <br />€{170}
                  <br />
                  <br />
                  {nrOfBedrooms}
                  <br />
                  {4}
                  <br />
                  {nrOfBathrooms}
                </p>
              </Col>
              <Col>
                <iframe
                  className='map'
                  title='map'
                  src={
                    'https://maps.google.com/maps?output=embed&q=' + city
                  }></iframe>
              </Col>
            </Row>
          </Tab>
          <Tab
            className='faciliteiten'
            eventKey='faciliteiten'
            title='Faciliteiten'>
            <Row>
              <Col>
                <p>Deze accommodatie beschikt over:</p>
                <ul>
                  {hasWifi === 1 ? <li>Gratis wifi</li> : null}
                  {hasParking === 1 ? <li>Parking </li> : null}
                  {haspool === 1 ? <li>Buitenzwembad</li> : null}
                  {hasTV === 1 ? <li>Tv</li> : null}
                  {petsAllowed === 1 ? <li>Huisdieren toegelaten</li> : null}
                </ul>
              </Col>

              <Col>
                <p>In de buurt:</p>
                <Row>
                  <Col className='places'>
                    <ul>
                      <li>Centrum</li>
                      <li>Strand</li>
                      <li>Supermarkt</li>
                      <li>Luchthaven</li>
                    </ul>
                  </Col>

                  {/* TO DO: DYNAMISCH MAKEN */}
                  <Col className='places-data'>
                    <ul>
                      <li>3 km</li>
                      <li>1 km</li>
                      <li>0.5 km</li>
                      <li>15 km</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey='beoordelingen' title='Beoordelingen'>
            <div className='review-container'>
              <h5>{t('Information.ervaring')}</h5>
              <div className='review'>
                <h6>Jef B.</h6>

                {score === '5.0000' ? (
                  <div className='rating'>*****</div>
                ) : null}
                {score === '4.0000' ? <div className='rating'>****</div> : null}
                {score === '3.0000' ? <div className='rating'>***</div> : null}
                {score === '2.0000' ? <div className='rating'>**</div> : null}
                {score === '1.0000' ? <div className='rating'>*</div> : null}

                <p>
                  "Fantastisch mooie villa, met nog een beter uitzicht. Het
                  zwembad was zalig om eens af te koelen. Alles is zeer
                  dichtbij, een lichte wandeling naar het centrum."
                </p>
              </div>
            </div>
          </Tab>

          <Tab eventKey='weer' title='Weer'>
            <div className='weather-container'>
              <h5>
                {t('Information.weerbericht')} {city}{' '}
                {t('Information.dezeWeek')}
              </h5>
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang='en'
                locationLabel={city}
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
              />
            </div>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default Information;
