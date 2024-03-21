import React from 'react';
//import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import CarDisplay from '../Components/CarDisplay/CarDisplay';

const Product = (props) => {
  const { all_product } = props; // Assuming all_product is passed as a prop
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <CarDisplay product={product} />
      <DescriptionBox />
    </div>
  );
};

export default Product;
