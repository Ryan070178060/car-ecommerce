import React from 'react';
import "./Hero.css"
const Hero = () => {
  return (
    <div className="container">
      <div className="welcome-hero-txt">
        <h2>get your desired car in reasonable price</h2>
        <p>
          Get the coolest lambos and rarris at an exclusive price, customs also available. 
        </p>
        <button className="welcome-btn" onClick={() => window.location.href='#'}>contact us</button>
      </div>
    </div>
  );
}

export default Hero;
