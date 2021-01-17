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
              {(props) => (
                <StyledForm>
                  <FormInput component="select" name="country">
                    <option value="" disabled>
                      Please Select a Country
                    </option>
                    <option value="NG">Nigeria</option>
                    <option value="GH">Ghana</option>
                    <option value="KE">Kenya</option>
                    <option value="UK">United Kingdom</option>
                  </FormInput>

                  {props.values.country === 'NG' && (
                    <FormInput component="select" name="bankName">
                      <option value="" disabled>
                        Please Select a Bank
                      </option>
                      <option value="011">First Bank of Nigeria</option>
                      <option value="057">Zenith Bank</option>
                      <option value="068">Standard Cahatered Bank</option>
                      <option value="070">Fidelity Bank</option>
                      <option value="215">Unity Bank</option>
                      <option value="050">EcoBank</option>
                      <option value="221">Stanbic IBTC Bank</option>
                      <option value="044">Access Bank</option>
                      <option value="058">GTBank PLC</option>
                      <option value="032">Union Bank</option>
                      <option value="232">Sterling Bank</option>
                      <option value="033">United Bank for Africa</option>
                    </FormInput>
                  )}

                  {props.values.country === 'GH' && (
                    <FormInput component="select" name="bankName">
                      <option value="" disabled>
                        Please Select a Bank
                      </option>
                      <option value="11276282">
                        First National Bank Ghana Limited
                      </option>
                      <option value="10550214">
                        The Hongkong and Shanghai Banking Corporation Limited{' '}
                      </option>
                      <option value="11088200">
                        Giro Elszamolasforgalmi Zrt.
                      </option>
                      <option value="11299458">OmniBank Ghana Limited</option>
                      <option value="11319374">GHL Bank Ltd</option>
                      <option value="11350352">Consolidated Bank Ghana</option>
                      <option value="2006168ICS">
                        Standard Chartered Bk Ghana Int
                      </option>
                      <option value="2006228LG0">
                        UNITED BANK FOR AFRICA (GHANA) LTD
                      </option>
                      <option value="20112200">Partner Banka d.d</option>
                      <option value="20313200">
                        Agricultural Development Bank Limited
                      </option>
                      <option value="20313400">Bank of Ghana</option>
                    </FormInput>
                  )}
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
