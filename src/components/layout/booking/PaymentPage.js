import React, { Button } from 'react';
import '../../CSS/bookingPage/PaymentPage.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Payment() {
  return (
    <div className='payment-container'>
      <Card>
        <Card.Header as='h5'>Betalingspagina</Card.Header>
        <Card.Body>
          <div className='booking-paymethod'>
            <h5>Betalingsmethode</h5>
            <div className='paymethod-radio'>
              <div>
                <input type='radio' value='paypal' name='paymethod' />
                PayPal
              </div>
              <div>
                <input type='radio' value='bancontact' name='paymethod' />
                Bancontact
              </div>
              <div>
                <input type='radio' value='creditcard' name='paymethod' />
                Creditcard
              </div>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <h2>€ 1415,5</h2>
          <Link to='/user-content/my-bookings'>
            <button className='btn'>Betaal nu</button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Payment;
