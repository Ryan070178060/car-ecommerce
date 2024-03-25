import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './CSS/CarCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const CarCategory = (props) => {
  const { all_product } = useContext(ShopContext) || { all_product: [] };
  const productLength = all_product ? all_product.length : 0; // Check if all_product is defined

  return (
    <div className='car-category'> 
      <div className="carcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {productLength} products
        </p>
        <div className="carcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="carcategory-products">
        {all_product && all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
      <div className="carcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

CarCategory.propTypes = {
  all_product: PropTypes.array, // Define all_product prop as an array
};

export default CarCategory;
