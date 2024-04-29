import React from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
    const { product } = props;

    const phoneNumber = '+254701978060';

  const openWhatsAppContact = () => {
    // Redirect to WhatsApp with the phone number
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">Ksh {product.old_price}</div>
                    <div className="productdisplay-right-price-new">Ksh {product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    You get the best cars at our company and no other car dealer has better deals than us.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Color</h1>
                    <div className="productdisplay-right-sizes">
                        <div>Red</div>
                        <div>White</div>
                        <div>Black</div>
                        <div>Grey</div>
                        <div>Blue</div>
                    </div>
                </div>
                <p className="productdisplay-right-category"><span>Category :</span>SUV,Sports,Electric, Muscle</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Model, Latest</p>
                {/* Button added here */}
                <button className="welcom-btn" onClick={openWhatsAppContact}>Order Now</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
