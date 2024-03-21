import React from 'react';
import './CSS/CarCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const CarCategory = (props) => {
  const { all_product } = props; // Assuming all_product is passed as a prop
  return (
    <div className='car-category'> 
      <div className="carcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="carcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="carcategory-products">
        {all_product.map((item, i) => {
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

export default CarCategory;
