import React, { useState } from 'react';
import image from '../../img/backgroundimage.svg';
import * as actions from '../../store/actions/authActions';
import { data } from '../../store/DispatchRidersData';

import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'reactstrap';
import { KeyboardArrowLeft } from '@material-ui/icons';

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
  bankName: Yup.string().required('Bank name is required'),
  accountName: Yup.string().required('Account name is required'),
  accountNumber: Yup.string()
    .matches(phoneRegExp, 'Not a valid Number')
    .required('Account Number is required'),
});

const ShopRegisterTwo = ({ loading, error, authenticated, uid, signup }) => {
  const [items, setItems] = useState(data);
  const history = useHistory();
  const keys = Object.keys(items);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];

  const rider = items[randomIndex];

  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Col sm="6">
          <Wrapper>
            <Heading>Register</Heading>
            <Heading2>Bank Account information</Heading2>
            {error && <Alert color="danger">{error}</Alert>}
            <FormContainer
              initialValues={{
                bankName: '',
                accountNumber: '',
                country: '',
                accountName: '',
                dispatchRider: rider,
              }}
              validationSchema={RegisterSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await signup(values);
                setSubmitting(false);
                if (!error && uid) {
                  history.replace('/shop-register/step3');
                }
              }}
            >
              {({ isSubmitting, isValid }) => (
                <StyledForm>
                  <FormInput
                    type="text"
                    name="bankName"
                    placeholder="Bank Name"
                  />
                  <ErrorWrapper>
                    <Error name="bankName" />
                  </ErrorWrapper>
                  <FormInput
                    type="text"
                    name="accountName"
                    placeholder="Account Name"
                  />
                  <ErrorWrapper>
                    <Error name="accountName" />
                  </ErrorWrapper>
                  <FormInput
                    type="text"
                    name="accountNumber"
                    placeholder="Account Number"
                  />
                  <ErrorWrapper>
                    <Error name="accountNumber" />
                  </ErrorWrapper>

                  <FormInput component="select" name="country">
                    <option value="" disabled>
                      Please Select an option
                    </option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </FormInput>

                  <TextWrapper2 type="submit">
                    <Text style={{ color: '#fff' }}>
                      {loading ? 'Finishing Up...' : 'Finish'}
                    </Text>
                  </TextWrapper2>
                </StyledForm>
              )}
            </FormContainer>

            <TextWrapper
              style={{ color: '#E77728' }}
              onClick={() => history.push('/shop-register')}
            >
              <KeyboardArrowLeft />

              <Texttwo to="/shop-register" main>
                Back
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
  signup: actions.SignUpStepTwo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopRegisterTwo);
