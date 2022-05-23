import React from 'react';
//import { Link } from 'react-router-dom';
import '../../../App.css'
import '../../CSS/becomeHost/BecomeHost.css';
import { Card, Col, ListGroup, Row, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function BecomeHost() {
  const { t } = useTranslation();
  return (
    <div className='becomeHost-container'>
      <Card>
        <Card.Img variant="top" src={require("../../img/keyhouse.jpg")} />
        <Card.Body>
          <Row  className='blokwrapper1'>
            <Col className='blokwrapper2 col-3'>
              <Card className='linkblok'>
                <Card.Header>{t('WordtHost.informatie')}</Card.Header>
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action href="#link1">{t('WordtHost.algemeen')}</ListGroup.Item>
                  <ListGroup.Item action href="#link2">{t('WordtHost.poetsen')}</ListGroup.Item>
                  <ListGroup.Item action href="#link3">{t('WordtHost.sleutel')}</ListGroup.Item>
                  <ListGroup.Item>
                    <Button>{t('WordtHost.contacteer')}</Button>
                    <Button>{t('WordtHost.vakantiehuisplaatsen')}</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card.Text id='link1'>
              {t('WordtHost.tekst11')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst12')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst13')} </Card.Text>
              <Card.Text>
              {t('WordtHost.tekst14')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst15')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst16')}</Card.Text>
              <Card.Text id='link2'>
              {t('WordtHost.tekst21')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst22')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst23')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst24')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst25')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst26')}</Card.Text>
              <Card.Text>
              <ul>
                <li>{t('WordtHost.list1')}</li>
                <li>{t('WordtHost.list2')}</li>
                <li>{t('WordtHost.list3')}</li>
                <li>{t('WordtHost.list4')}</li>
                <li>{t('WordtHost.list5')}</li>               
              </ul> 
              </Card.Text>
              <Card.Text>{t('WordtHost.list6')}</Card.Text>
              <Card.Text id='link3'>
              {t('WordtHost.title2')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst31')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst32')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst33')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst34')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst35')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst36')}</Card.Text>
              <Card.Text>
              {t('WordtHost.title3')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst41')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst42')}</Card.Text>
              <Card.Text>
              {t('WordtHost.tekst43')}</Card.Text>
              <ul>
                <li>{t('WordtHost.list21')}</li>
                <li>{t('WordtHost.list22')}</li>
                <li>{t('WordtHost.list23')}</li>
                <li>{t('WordtHost.list24')}</li>
                <li>{t('WordtHost.list25')}</li>
                <li>{t('WordtHost.list26')}</li> 
                <li>{t('WordtHost.list27')}</li>                
              </ul> 
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BecomeHost;