import React from 'react';
import '../../App.css';
import CardItem from './CardItem';
import '../CSS/TopListing.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

function TopListing(src, text, label, path) {
  const { t, i18n } = useTranslation();
  return (
    <div className='toplisting-container'>
      <h1 className='hoyspain-h1 text-center'>{t('TopListing.toppers')}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../../components/img/accommodatie_01.jpeg')}
              text='Málaga, Spanje | vanaf €132,00'
              label='* * * * *'
              path='/accommodatie/detail'
            />
            <CardItem
              src={require('../../components/img/accommodatie_02.jpg')}
              text='Mallorca, Spanje | vanaf €108,00'
              label='* * * *'
              path='Booking.js'
            />
            <CardItem
              src={require('../../components/img/accommodatie_03.jpg')}
              text='Granada, Spanje | vanaf €115,00'
              label='* * * *'
              path='/components/pages/Accommodaties.js'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopListing;
