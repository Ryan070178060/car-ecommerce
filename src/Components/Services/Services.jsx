import React from 'react';
import './Services.css'
import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <section id="service" className="service">
      <div className="gontainer">
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-car" aria-hidden="true"></i>
                </div>
                <h2><Link to="/service-description">Unlimited repair warranty</Link></h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
                </p>
            
            </div>
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-wrench" aria-hidden="true"></i>
                </div>
                <h2><a href="#">Unlimited repair warranty</a></h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
                </p>
              
            </div>
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-umbrella" aria-hidden="true"></i>
                </div>
                <h2><a href="#">Insurance support</a></h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. 
                </p>
            
            </div>
      
      </div>
    </section>
  );
}

export default Service;
