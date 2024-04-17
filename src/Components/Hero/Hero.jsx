import React from 'react';
import "./Hero.css"

const Hero = () => {
  // Replace '1234567890' with your actual phone number
  const phoneNumber = '+254701978060';

  const openWhatsAppContact = () => {
    // Redirect to WhatsApp with the phone number
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className="container">
      <div className="welcome-hero-txt">
        <h2>get your desired car in reasonable price</h2>
        <p>
          Get the coolest lambos and rarris at an exclusive price, customs also available. 
        </p>
        <button className="welcome-btn" onClick={openWhatsAppContact}>contact us</button>
      </div>
    </div>
  );
}

export default Hero;

