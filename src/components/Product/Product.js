import React from 'react';
import {
  ProductButton,
  ProductCase,
  ProductDetails,
  ProductImage,
  ProductName,
} from './ProductElements';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/actions/shopActions';

const Product = ({ id, image, name, price }) => {
  const items = useSelector((state) => state.cart.basket);
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(
      actionTypes.addItem({
        id: id,
        name: name,
        price: price,
        image: image,
      })
    );
    console.log(items);
  };

  return (
    <div>
      <ProductCase>
        <ProductImage src={image} />
        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductName weight>NGN {price}.00</ProductName>
          <ProductButton onClick={addToBasket} variant={'outlined'}>
            Add to Cart
          </ProductButton>
        </ProductDetails>
      </ProductCase>
    </div>
  );
};

export default Product;
