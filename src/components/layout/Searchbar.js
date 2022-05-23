import React, { useState, useEffect } from 'react';
import '../CSS/Button.css';
import '../CSS/Searchbar.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import addDays from 'date-fns/addDays';
import ElementPopper from 'react-element-popper';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useTranslation } from 'react-i18next';
// import { svgTest } from '..\2022-frontend-vc2-1\vc2-frontend\public\img\calendar-days-solid.svg';

const Searchbar = () => {
  const { t } = useTranslation();
  const [city, setCity] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [amountPeople, setAmountPeople] = useState(0);
  const [active, setActive] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    // in local storage steken zodat de gegevens persistend blijven
    const resevationData = {
      destination: city,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      amountPeople: amountPeople,
    };

    localStorage.setItem('reservation-data', JSON.stringify(resevationData));
    window.location = '/homes';
  };

  const changeCity = (value) => {
    setCity(value);
  };

  const changeStartDate = (value) => {
    setCheckInDate(value);
  };

  const changeEndDate = (value) => {
    setCheckOutDate(value);
  };

  const changeAmountPeople = (value) => {
    setAmountPeople(value);
  };

  console.log(city, checkInDate, checkOutDate, amountPeople);
  const Div = ({ children }) => (
    <div
      onMouseOut={() => setActive(!active)}
      style={{
        border: '0px',
      }}>
      {children}
    </div>
  );

  const handleDecrement = () => {
    if (amountPeople > 1) setAmountPeople((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    if (amountPeople < 20) setAmountPeople((prevCount) => prevCount + 1);
    setAmountPeople(amountPeople + 1);
  };

  // useEffect(() => {
  //   onchangeCounter();
  //   onchangeInCheckDate();
  //   setoutcheckdate();
  // },[onchangeCounter,onchangeInCheckDate,setoutcheckdate]);

  useEffect(() => {
    var options = [
      'Madrid',
      'Barcelona',
      'Valencia',
      'Sevilla',
      'Zaragoza',
      'Málaga',
      'Murcia',
      'Palma de Mallorca',
      'Las Palmas',
      'Bilbao',
      'Alicante',
      'Córdoba',
      'Valladolid',
      'Vigo',
      'Gijón',
      'A Coruña',
      'Granada',
      'Vitoria-Gasteiz',
      'Elx',
      'Oviedo',
      'Santa Cruz',
      'Cartagena',
      'Jerez de la Frontera',
      'Pamplona',
      'Almería',
      'Donostia-San Sebastián',
      'Castellón de la Plana',
      'Santander',
      'Burgos',
      'Salamanca',
    ];
    var select = document.getElementById('city');
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement('option');
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }, []);
  return (
    <div className='search-container'>
      <div className='titlediv'>
        <h1 className='title'>{t('Searchbar.titel')}</h1>
      </div>
      <Row className='box-container'>
        <Col className='x'></Col>
        <Col className='x'>
          <div className='box-input bestemming'>
            <label>
              {`${t('Searchbar.bestemming')}`}
              <br />
              <div className='labeltim moetKleiner'>
                <FmdGoodIcon />
                <select
                  id='city'
                  onChange={(e) => changeCity(e.target.value)}
                  className='input'>
                  <option className='' disabled selected hidden>
                    {t('Searchbar.bestemmingInput')}
                  </option>
                </select>
                {/* <StedenDropdown
                  className='input'
                  id='destination'
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                /> */}
              </div>
            </label>
          </div>
        </Col>
        <Col className='x'>
          <div className='box-input date0'>
            <label>
              {`${t('Searchbar.incheck')}`}
              <br />
              <div className='inputholder'>
                <CalendarMonthIcon />
                <DatePicker
                  className='input'
                  minDate={new Date()}
                  id='amountPeople'
                  selected={checkInDate}
                  onChange={(date) => changeStartDate(date)}
                  placeholderText={`${t('Searchbar.wanneer')}`}
                  autoComplete='off'
                />
              </div>
            </label>
          </div>
        </Col>
        <Col className='x'>
          <div className='box-input date1'>
            <label>
              {`${t('Searchbar.uitcheck')}`}
              <div className='inputholder'>
                <br />
                <CalendarMonthIcon />
                <DatePicker
                  className='input'
                  minDate={addDays(checkInDate, 1)}
                  id='amountPeople'
                  selected={checkOutDate}
                  onChange={(date) => changeEndDate(date)}
                  placeholderText={`${t('Searchbar.wanneer')}`}
                  autoComplete='off'
                />
              </div>
            </label>
          </div>
        </Col>
        <Col className='x'>
          <div className='box-input date2'>
            <label
              className='moetKleiner'
              onMouseEnter={() => setActive(!active)}>
              {`${t('Searchbar.AantalP')}`}
              <br />
              <div className='inputholder'>
                <GroupIcon />
                <ElementPopper
                  element={
                    <input
                      className='input'
                      type='text'
                      value={amountPeople}
                      onChange={changeAmountPeople}
                    />
                  }
                  popper={
                    <Div className='add-btn'>
                      <button className='add-btn' onClick={handleDecrement}>
                        -
                      </button>
                      <button className='add-btn' onClick={handleIncrement}>
                        +
                      </button>
                    </Div>
                  }
                  active={active}
                />
              </div>
            </label>
          </div>
        </Col>
        <Col className='x'>
          <div className='search-btn'>
            <Link
              to={`/homes?city=${city}&startDate=${format(
                new Date(checkInDate),
                'yyyy-MM-dd'
              )}
              &endDate=${format(
                new Date(checkOutDate),
                'yyyy-MM-dd'
              )}&ppl=${amountPeople}`}>
              <button onClick={onSubmit}>
                <SearchIcon />
              </button>
            </Link>
          </div>
        </Col>
        <Col className='x'></Col>
      </Row>
    </div>
  );
};

export default Searchbar;
