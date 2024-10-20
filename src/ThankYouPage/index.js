import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
        <div className='thank-you'>
            <h1>"Thank you for your interest in MONSTERRA"</h1>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
    </div>
  );
};

export default ThankYouPage;
