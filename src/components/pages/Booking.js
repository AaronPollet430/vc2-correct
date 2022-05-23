import React, { Fragment, useState } from 'react';
import Booking from '../layout/booking/BookingPage';
import '../CSS/bookingPage/Booking.css';
import axios from 'axios';

const BookingPage = () => {
  const [home, setHome] = useState(null);
  let str = localStorage.getItem('reservation-data');
  let id = 'unknown';
  if (str) {
    let obj = JSON.parse(str);
    id = obj.id;
  }

  const getHomeById = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/homes/${id}`, {
        headers: { authorization: 'Bearer YOUR_JWT_TOKEN_HERE' },
      });
      setHome(res.data.data);
    } catch (error) {}
  };

  return (
    <Fragment>
      <main>
        <Booking home={home} />
      </main>
    </Fragment>
  );
};

export default BookingPage;
