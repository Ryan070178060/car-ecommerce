import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
//import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate fetching data with a delay
    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 2000);
  }, []); // Empty dependency array to run effect only once

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      {/* <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
  </div>*/}
      </div>
      {loading ? ( // Display loading indicator if loading is true
        <div className='loading'>
          <div className='spinner'></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className='shopcategory-products'>
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null;
          })}
        </div>
      )}
      <div className='shopcategory-loadmore'></div>
    </div>
  );
};

export default ShopCategory;