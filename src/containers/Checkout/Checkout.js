import React from 'react';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import OrderTotal from "../../components/OrderTotal";
import {
  Container,
  CheckoutItems,
  CheckoutHeader,
} from './CheckoutElements';

const Checkout = () => {
  return (
    <Container>
      <CheckoutItems>
        <CheckoutHeader>Your Shopping Basket</CheckoutHeader>
        <CheckoutProduct />
      </CheckoutItems>
        <OrderTotal checkout={true}/>

    </Container>
  );
};

export default Checkout;
