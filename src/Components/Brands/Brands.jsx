import React from 'react';
import './Brands.css';
const Brands = () => {
  return (
    <div className="brands-container">
      <img src={require('../Assets/brand/br1.png')} alt="Brand 1" className="brand-image" />
      <img src={require('../Assets/brand/br2.png')} alt="Brand 2" className="brand-image" />
      <img src={require('../Assets/brand/br3.png')} alt="Brand 3" className="brand-image" />
      <img src={require('../Assets/brand/br4.png')} alt="Brand 4" className="brand-image" />
      <img src={require('../Assets/brand/br5.png')} alt="Brand 5" className="brand-image" />
      <img src={require('../Assets/brand/br6.png')} alt="Brand 6" className="brand-image" />
    </div>
  );
};

export default Brands;
