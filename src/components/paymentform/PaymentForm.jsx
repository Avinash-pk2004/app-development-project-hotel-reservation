import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './PaymentForm.css'; // Import the CSS file

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Information</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        {/* Payment Information */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </div>
        </div>

        <Link to="/pays"><button  type="submit">Complete Payment</button></Link>
      </form>
    </div>
  );
};

export default PaymentForm;
