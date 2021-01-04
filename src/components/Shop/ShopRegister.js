import React, { useEffect } from 'react';
import image from '../../img/backgroundimage.svg';
import * as actions from '../../store/actions/authActions';

import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'reactstrap';
import { KeyboardArrowRight } from '@material-ui/icons';

import {
  Column,
  BackgroundImage,
  Image,
  Heading,
  Wrapper,
  FormContainer,
  StyledForm,
  FormInput,
  TextWrapper,
  TextWrapper2,
  Text,
  Texttwo,
  Heading2,
  ErrorWrapper,
  Error,
} from './ShopLoginElements';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterSchema = Yup.object().shape({
  shopName: Yup.string()
    .required('Shop name is required')
    .min(3, 'Name too short')
    .max(25, 'Name too long'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone Number is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('Please confirm password'),
});

const ShopRegister = ({ signUp, error, loading, uid }) => {
  const history = useHistory();

  useEffect(() => {
    if (uid && uid !== '') {
      history.replace('/shop-register/step2');
    }
  }, [uid]);
  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Col sm="6">
          <Wrapper>
            <Heading>Register</Heading>
            <Heading2>Add Shop Owner information</Heading2>
            {error && <Alert color="danger">{error}</Alert>}
            <FormContainer
              initialValues={{
                shopName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={RegisterSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await signUp(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, isValid }) => (
                <StyledForm>
                  <FormInput
                    type="text"
                    name="shopName"
                    placeholder="Shop Name"
                  />
                  <ErrorWrapper>
                    <Error name="shopName" />
                  </ErrorWrapper>
                  <FormInput type="email" name="email" placeholder="Email" />
                  <ErrorWrapper>
                    <Error name="email" />
                  </ErrorWrapper>
                  <FormInput
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                  />
                  <ErrorWrapper>
                    <Error name="phoneNumber" />
                  </ErrorWrapper>
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorWrapper>
                    <Error name="password" />
                  </ErrorWrapper>
                  <FormInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <ErrorWrapper>
                    <Error name="confirmPassword" />
                  </ErrorWrapper>

                  <TextWrapper2 type="submit">
                    <Text style={{ color: '#FFF' }}>
                      {loading ? 'Setting Up...' : 'Next'}
                    </Text>
                    <KeyboardArrowRight style={{ color: '#FFF' }} />
                  </TextWrapper2>
                </StyledForm>
              )}
            </FormContainer>

            <TextWrapper style={{ marginBottom: 50 }}>
              <Text>Already have an account?</Text>
              <Texttwo to="/shop-login" main>
                Log In
              </Texttwo>
            </TextWrapper>
          </Wrapper>
        </Col>
        <Column sm="6">
          <BackgroundImage>
            <Image src={image} />
          </BackgroundImage>
        </Column>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
  authenticated: auth.authenticated,
  uid: auth.uid,
});

const mapDispatchToProps = {
  signUp: actions.SignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopRegister);
