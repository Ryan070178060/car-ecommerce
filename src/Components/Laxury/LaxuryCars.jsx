import React, { useState, useEffect } from 'react';
import './LaxuryCars.css'; // Assuming you have a corresponding CSS file

const LaxuryCars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cars = [
    {
      image: 'fc6.jpg',
      title: 'BMW 6 series grande ccoupe',
      description: 'Super fast car with tuurbo recharge also equiped with horse-power engine',
    },
    {
      image: 'fc6.jpg',
      title: 'Chevrolet Camaro WY220',
      description: 'Super engine with horse power and power emmitter, greatest tyres ever',
    },
    {
      image: 'fc6.png',
      title: 'Lambougini V520',
      description: 'Engine equiped with horse power, very fast,cool interiors',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cars.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [cars.length]);
  

  return (
    <div className="new-cars">
      <h2>Laxury Cars</h2>
      <div className="kontainer">
      <img src={require('../Assets/fc' + (currentSlide + 1) + '.png')} alt={cars[currentSlide].title} />
      <div className="katamba">
      <h3>{cars[currentSlide].title}</h3>
        <p>{cars[currentSlide].description}</p>
      </div>
        
      </div>
    </div>
  );
};

export default LaxuryCars;