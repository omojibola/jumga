import React from 'react';
import {
  ProductButton,
  ProductCase,
  ProductDetails,
  ProductImage,
  ProductName,
} from './ProductElements';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/shopActions';
import CurrencyFormat from 'react-currency-format';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({ id, image, name, price, subaccountId }) => {

  const dispatch = useDispatch();
  const notify = () => toast.dark(`${name} added to cart!`);

  const addToBasket = () => {
    dispatch(
      actionTypes.addItem({
        id: id,
        name: name,
        price: price,
        image: image,
        subaccountId: subaccountId,
      })
    );
    notify();

  };

  return (
    <div>
      <ProductCase>
        <ProductImage src={image} />
        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductName weight>
            USD
            <CurrencyFormat
              renderText={(value) => <>{value}.00</>}
              decimalScale={2}
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={' '}
            />
          </ProductName>
          <ProductButton onClick={addToBasket} variant={'outlined'}>
            Add to Cart
          </ProductButton>
        </ProductDetails>
          <ToastContainer autoClose={3000} newestOnTop={true}/>
      </ProductCase>
    </div>
  );
};

export default Product;
