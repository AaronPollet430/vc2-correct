import React from 'react';
//import { Link } from 'react-router-dom';
import '../../../App.css'
import '../../CSS/home/VerhuurderVragen.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function VerhuurderVragen() {
  const { t, i18n } = useTranslation();
  return (
    <div className='verhuurder-vragen-container'>
      <Row className='row-container'>
        <Col className='col1'>
          <h3>{t('Verhuurder.titel')}</h3>
          
          <Card className="text-center">
            <Card.Body>
              <Card.Text>
              {t('Verhuurder.verhuurNu')}
              </Card.Text>
              <Button>{t('Verhuurder.info')}</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className='col1'>
        <h3>{t('Verhuurder.vragen')}</h3>
          <Card className="text-center">
            <Card.Body>
              <Card.Text>
              {t('Verhuurder.stuur')}
              </Card.Text>
              <Button>{t('Verhuurder.contacteer')}</Button>
              <Card.Text>
              {t('Verhuurder.bekijkFaq')}
              </Card.Text>
              <Button>{t('Verhuurder.faq')}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VerhuurderVragen;