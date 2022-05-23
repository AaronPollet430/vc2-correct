import React, { Fragment } from 'react';
import BookingConfirmation from '../layout/booking/BookingConfirmationPage';
import '../CSS/bookingPage/BookingConfirmationPage.css'

const BookingConfirmationPage = () => {
  return (
    <Fragment>
      <main className='booking-confirmation-main'>
        <BookingConfirmation />
      </main>
    </Fragment>
  );
};

export default BookingConfirmationPage;