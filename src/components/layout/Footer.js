import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function Footer() {
  
  const { t, i18n } = useTranslation();

  return (
    <div className='footer-container'>
      <Row className='rowWrapper'>
        <Col className='important-info'>
          <h5>{t("Footer.info")}</h5>
          <ul>
            <li>
              <Link to='/'>{t("Footer.overons")}</Link>
            </li>
            <li>
              <Link to='/contact'>{t("Footer.contact")}</Link>
            </li>
            <li>
              <Link to='/'>{t("Footer.faq")}</Link>
            </li>
            <li>
              <Link to='/'>{t("Footer.verzekering")}</Link>
            </li>
          </ul>
        </Col>
        <Col className='newsletter'>
          <h5>{t("Footer.nieuwsbrief")}</h5>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={t("Footer.email")}
              aria-label="Recipient's e-mailaddress"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            {t("Footer.inschrijven")}
            </Button>
          </InputGroup>
        </Col>  
        <Col classname='rightside'>
          <h2>LOGO</h2>
          <h5>{t("Footer.volgons")}</h5>
            <Link to='/'>
              <i className='fab fa-facebook-square' />
            </Link>
            <Link to='/'>
              <i className='fab fa-instagram-square' />
            </Link>
            <Link to='/'>
              <i className='fab fa-twitter-square' />
            </Link>
            <Link to='/'>
              <i className='fab fa-youtube-square' />
            </Link>
            <Link to='/'>
              <i className='fab fa-linkedin' />
            </Link>
        </Col>
      </Row>
      <small className='website-rights'>{t("Footer.voorwaarden")}</small>
    </div>
  );
}

export default Footer;
