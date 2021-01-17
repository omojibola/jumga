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

const Product = ({ id, image, name, price, subaccountId }) => {
  const dispatch = useDispatch();

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
      </ProductCase>
    </div>
  );
};

export default Product;
