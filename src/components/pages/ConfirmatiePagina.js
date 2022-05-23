import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/bookingPage/Confirmatie.css';

const ConfirmatiePagina = () => {
  return (
    <Fragment>
      <div className='confirmatie-container'>
        <div className='confirmatie-wrapper'>
          <div className='confirmatie-titel'>
            <div className='content'>
              <h1>Bedankt voor uw boeking bij HoySpain!</h1>
              <p>Wij wensen u een prachtige reis tegemoet</p>
              <Link to='/my-bookings'>
                <button className='btn'>Bekijk uw boeking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmatiePagina;
