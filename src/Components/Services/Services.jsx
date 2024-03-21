import React from 'react';
import './Services.css'
const Service = () => {
  return (
    <section id="service" className="service">
      <div className="container">
            <div className="kasamba">
                <div className="single-service-icon">
                <i className="fa fa-car" aria-hidden="true"></i>
                </div>
                <h2><a href="#">Largest dealership <span> of</span> car</a></h2>
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
