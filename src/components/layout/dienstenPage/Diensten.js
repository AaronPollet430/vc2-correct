import React from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../../CSS/DienstenFull.css';

function Diensten() {
  const { t } = useTranslation();
  return (
    <div className='diensten-container'>
      <Row>
        <h1 className='Dtitle'>{t('DienstenF.title')}</h1>
      </Row>
      
      <div className='services-content'>
        <div className='transport-container'>
          <h4 className='subtitle'>
          {t('DienstenF.transport')}
          </h4>

          <div className='transport-cards'>
            <div className='eersteshuffle'>
            <Card className="Dcard bg-light text-white">
              <Card.Img src={require("../../img/costawheels.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Row className='Dinfo'>
                  <Button  href="https://www.costawheelsrentalcars.com/" target="_blank">{t('DienstenF.info')}</Button>
                </Row>
              </Card.ImgOverlay>
            </Card>

            <Card className="Dcard bg-light text-white">
              <Card.Img src={require("../../img/marbesol.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Row className='Dinfo'>
                  <Button href="https://www.marbesol.com/" target="_blank">{t('DienstenF.info')}</Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
            </div>
            <Card className="Dcard bg-light text-white">
              <Card.Img src={require("../../img/sixt.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Row className='Dinfo'>
                  <Button href="https://www.sixt.com/#/" target="_blank">{t('DienstenF.info')}</Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </div>
          
        </div>

        <div className='cleaningServices-container'>
          <h4 className='subtitle'>
          {t('DienstenF.schoonmaak')}
          </h4>

          <div className='cleaningServices-cards'>
            <Card className="Dcard bg-light text-white">
              <Card.Img src={require("../../img/schoonmaakdienst.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Row className='Dinfo'>
                  <Button href="https://axarclean.com/" target="_blank">{t('DienstenF.info')}</Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className='technicalServices-container'>
          <h4 className='subtitle'>
          {t('DienstenF.technisch')}
          </h4>

          <div className='technicalServices-cards'>
            <Card className="Dcard bg-light text-white">
              <Card.Img src={require("../../img/technischedienst.png")} alt="Card image" />
              <Card.ImgOverlay>
                <Row className='Dinfo'>
                  <Button href="https://www.sat-malaga.es/" target="_blank">{t('DienstenF.info')}</Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Diensten;