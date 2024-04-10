import React from 'react';
import './Services.css'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Service = () => {
  return (
    <section id="service" className="service">
      <div className="gontainer">
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-car" aria-hidden="true"></i>
                </div>
                <h2><Link to="/service-description">Car Service and Maintinance</Link></h2>
                <p>
                  Get the best services and maintince at our company garage.  
                </p>
            
            </div>
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-wrench" aria-hidden="true"></i>
                </div>
                <h2><Link to="/waranty"> Unlimited repair waranty</Link></h2>
                <p>
                  Get unlimited repair waranty for the new cars bought.  
                </p>
              
            </div>
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-umbrella" aria-hidden="true"></i>
                </div>
                <h2><Link to="/Insurance">Insurance support</Link></h2>
                <p>
                  Get insurance support at a discounted price on new cars bought. 
                </p>
            
            </div>
      
      </div>
    </section>
  );
}

export default Service;
