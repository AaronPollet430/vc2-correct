import React from 'react';
//import { Link } from 'react-router-dom';
import '../../../App.css'
import '../../CSS/home/Activiteiten.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function Activiteiten() {
  const { t, i18n } = useTranslation();
  return (
    <div className='activities-container'>
      <h3>{t('activiteiten.titel')}</h3>
      <Row>
        <Col>
            <Card className="bg-light text-white">
              <Card.Img className='atcivieiten-img' src={require("../../img/toppicks.jpg")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.tripadvisor.com/Attractions-g187435-Activities-a_allAttractions.true-Costa_del_Sol_Province_of_Malaga_Andalucia.html" target="_blank">{t('activiteiten.picks')}</Button>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-light text-white">
              <Card.Img className='atcivieiten-img' src={require("../../img/tours.jpg")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.tripadvisor.com/Attractions-g187435-Activities-c42-t225-Costa_del_Sol_Province_of_Malaga_Andalucia.html" target="_blank">{t('activiteiten.tours')}</Button>
              </Card.ImgOverlay>
            </Card>
        </Col>
      </Row>
      <Row>
          <Col>
            <Card className="bg-light text-white">
              <Card.Img className='atcivieiten-img' src={require("../../img/restaurants.jpg")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.tripadvisor.com/Restaurants-g187435-Costa_del_Sol_Province_of_Malaga_Andalucia.html" target="_blank">{t('activiteiten.resto')}</Button>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-light text-white">
              <Card.Img className='atcivieiten-img' src={require("../../img/bar.jpg")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.tripadvisor.com/Restaurants-g187435-zfg9900-Costa_del_Sol_Province_of_Malaga_Andalucia.html" target="_blank">{t('activiteiten.bars')}</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default Activiteiten;