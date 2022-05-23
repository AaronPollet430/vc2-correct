import React from 'react';
import '../css/MediumCard.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
function MediumCard({ src, title, description, price }) {
  const { t, i18n } = useTranslation();
  return (
    <div className='medium-card'>
      {/* <img src={src} alt='' /> */}
      <img src={require('../img/accommodatie_2.jpeg')} alt='' />
      <div className='medium-card-info'>
        <h4>{title}</h4>
        <h6>{price}</h6>
        <button className='btn btn-primary all-center'>{t('MediumCard.bekijk')}</button>
      </div>
    </div>
  );
}

export default MediumCard;
