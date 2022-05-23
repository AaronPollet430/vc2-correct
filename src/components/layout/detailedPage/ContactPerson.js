import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../../CSS/DetailedPage.css'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function ContactPerson() {
  const { t, i18n } = useTranslation();
  return (
    <Card className="col contactPerson-card">
      <Card.Header as="h5">{t('contact.vragen')}</Card.Header>
      <Card.Body className="contactPerson-body">
        <Card.Text>
        {t('contact.stelZe')}
        </Card.Text>
        <div className="contactPerson-info">
          <Card.Text className="contactPerson-name">
            Jan Janssens
          </Card.Text>
          <Card.Text>
            +32 123 45 67 89
          </Card.Text>
          <Card.Text>
            jan.janssens@email.com
          </Card.Text>
        </div>
        <div className="contact-btn">
          <Button variant="primary">{t('contact.contact')}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContactPerson;