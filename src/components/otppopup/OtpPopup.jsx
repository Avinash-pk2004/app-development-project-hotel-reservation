import React, { useState } from 'react';
import Modal from 'react-modal';
import './OtpPopup.css';


const OtpPopup = ({ isOpen, onRequestClose, onSubmitOtp }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitOtp(otp);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="otp-modal"
      overlayClassName="otp-overlay"
      contentLabel="OTP Verification"
    >
      <h2>Enter OTP</h2>
      <p>We have sent an OTP to your registered mobile number/email. Please enter it below to proceed with the payment.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          maxLength="6"
          className="otp-input"
          placeholder="Enter OTP"
          required
        />
        <button type="submit" className="otp-submit-button">Verify OTP</button>
      </form>
    </Modal>
  );
};

export default OtpPopup;
