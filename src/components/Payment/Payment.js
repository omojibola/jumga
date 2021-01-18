import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  OrderedList,
  PaymentForm,
  ListItem,
  PaymentHeading,
  PayParagraph,
  PaymentInfo,
  Details,
  FormContainer,
  FormLabel,
  FormInput,
  FormItem,
  FormLine,
  StyledForm,
  ReturnLink,
  SubmitButton,
} from './PaymentElements';
import { LinkTag } from '../Header/HeaderElements';
import OrderTotal from '../OrderTotal';
import { getBasketTotal } from '../../store/reducers/shopReducer';
import * as actionTypes from '../../store/actions/shopActions';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';

const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clearBasket = () => {
    dispatch(actionTypes.clearBasket());
  };
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    country: '',
    state: '',
  });

  const [show, setShow] = useState(false);

  const basket = useSelector((state) => state.cart.basket);

  let total = getBasketTotal(basket) + 150;

  let subaccount = basket.map((item) => {
    return item.subaccountId;
  });

  const config = {
    public_key: 'FLWPUBK-435b1af2cfff7063d83a20a7a1bb2941-X',
    tx_ref: Date.now(),
    amount: total,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: details.email,
      phone_number: details.phoneNumber,
      name: `${details.firstName} ${details.lastName}`,
    },
    subaccounts: [{ id: subaccount }],
    customizations: {
      title: 'JUMGA',
      description: 'Payment',
      logo:
        'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setDetails({
      ...details,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);

        if ((response.status = 'successful')) {
          setShow(true);
          clearBasket();
          history.push('/checkout');
        }
        setTimeout(() => {
          setShow(false);
        }, 2000);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  return (
    <PaymentForm>
      <PaymentInfo>
        <OrderedList>
          <LinkTag to={'/payment'}>
            <ListItem color>Shipping</ListItem>
          </LinkTag>
          <LinkTag to={'/paymentTwo'}>
            <ListItem>Payment</ListItem>
          </LinkTag>
          <LinkTag to={'/paymentConfirmed'}>
            <ListItem>Confirmation</ListItem>
          </LinkTag>
        </OrderedList>
        <PaymentHeading>Personal Details</PaymentHeading>
        <PayParagraph>
          If you already have an account,{' '}
          <ReturnLink to={'/login'}>sign in here</ReturnLink>{' '}
        </PayParagraph>

        <Details>
          <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
              <FormLine>
                <FormItem>
                  <FormLabel htmlFor={'firstName'}>First Name</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'firstName'}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor={'lastName'}>Last Name</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'lastName'}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormLine>
              <FormLine>
                <FormItem>
                  <FormLabel htmlFor={'phoneNumber'}>Phone Number</FormLabel>
                  <FormInput
                    type={'tel'}
                    name={'phoneNumber'}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor={'email'}>Email</FormLabel>
                  <FormInput
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormLine>
              <FormLine>
                <FormItem>
                  <FormLabel htmlFor={'address1'}>Address 1</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'address1'}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor={'address2'}>Address 2</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'address2'}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormLine>
              <FormLine>
                <FormItem>
                  <FormLabel htmlFor={'zipCode'}>Zip Code</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'zipCode'}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor={'city'}>City</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'city'}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormLine>
              <FormLine>
                <FormItem>
                  <FormLabel htmlFor={'country'}>Country</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'country'}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel htmlFor={'state'}>State</FormLabel>
                  <FormInput
                    type={'text'}
                    name={'state'}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormLine>
              {show && (
                <Alert
                  color="success"
                  style={{ fontSize: 18, textAlign: 'center', width: '90%' }}
                >
                  Payment Successful, Kindly check your mail
                </Alert>
              )}
              <FormLine>
                <ReturnLink to={'/checkout'}>Back to Cart</ReturnLink>
                <SubmitButton type="submit">Pay $ {total}</SubmitButton>
              </FormLine>
            </StyledForm>
          </FormContainer>
        </Details>
      </PaymentInfo>

      <OrderTotal />
    </PaymentForm>
  );
};

export default Payment;
