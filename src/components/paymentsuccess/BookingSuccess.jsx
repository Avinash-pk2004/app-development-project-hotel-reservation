import React, { useEffect, useState } from 'react';
import './BookingSuccess.css';

const BookingSuccess = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="booking-success-container">
      {showAnimation && (
        <div className="animation-wrapper">
          <div className="checkmark-container">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h2 className="success-message">Booking Successful!</h2>
          <p className="success-description">Your booking has been confirmed. We look forward to hosting you!</p>
        </div>
      )}
    </div>
  );
};

export default BookingSuccess;
