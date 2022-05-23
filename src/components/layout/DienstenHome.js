import React from 'react';
import '../../App.css';
//import DienstenCardItem from './Diensten-CardItem';
import '../CSS/Diensten.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
function DienstenHome() {
  const { t, i18n } = useTranslation();
  return (
    <div className='diensten-container'>
      <h3 className='diensten-title'>{t("DienstenHome.titel")}</h3>
      <Row className='cardrow'>
        <Col className='cardColum'>
            <Card className="cardContainer">
              <Card.Img src={require("../img/costawheels.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.costawheelsrentalcars.com/" target="_blank">{t("DienstenHome.knop")}</Button>
              </Card.ImgOverlay>
            </Card>

            <Card className="cardContainer">
              <Card.Img src={require("../img/marbesol.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.marbesol.com/" target="_blank">{t("DienstenHome.knop")}</Button>
              </Card.ImgOverlay>
            </Card>
            <Card className="cardContainer">
              <Card.Img src={require("../img/sixt.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Button href="https://www.sixt.com/#/" target="_blank">{t("DienstenHome.knop")}</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

export default DienstenHome;
