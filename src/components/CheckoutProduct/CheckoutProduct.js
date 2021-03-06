import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ProductHeading,
  Products,
  ProductInfo,
  ProductTop,
  ProductItem,
  ProductImg,
  ProductHead,
} from './ProductElements';
import { Close } from '@material-ui/icons';
import ButtonName from '../Button/ButtonName';
import { LinkTag } from '../Header/HeaderElements';
import * as actionTypes from '../../store/actions/shopActions';

const CheckoutProduct = () => {
  const basket = useSelector((state) => state.cart.basket);

  const dispatch = useDispatch();

  const removeFromBasket = (id) => {
    dispatch(actionTypes.removeItem(id));
  };
  return (
    <div>
      <ProductHeading>{basket.length} item(s)</ProductHeading>
      <Products>
        <ProductTop>
          <ProductHead>Product Details</ProductHead>
        </ProductTop>
        {basket.length !== 0 ? (
          basket.map((item, index) => (
            <ProductItem key={index}>
              <ProductImg src={item.image} />
              <ProductInfo>{item.name}</ProductInfo>
              <ProductInfo>USD {item.price}</ProductInfo>
              <Close onClick={() => removeFromBasket(item.id)} />
            </ProductItem>
          ))
        ) : (
          <ProductInfo>
            Your Shopping bag is empty. Start adding items!
          </ProductInfo>
        )}
      </Products>
      <LinkTag to={'/'}>
        <ButtonName>Back to Shop</ButtonName>
      </LinkTag>
    </div>
  );
};

export default CheckoutProduct;
