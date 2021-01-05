import React, { useEffect, Fragment } from 'react';
import image from '../../img/backgroundimage.svg';
import * as actions from '../../store/actions/profileActions';
import { createSubAccount } from '../../Functions/FlutterwaveFunctions';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { KeyboardArrowLeft } from '@material-ui/icons';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import {
  Column,
  BackgroundImage,
  Image,
  Heading,
  Wrapper,
  FormContainer2,
  FormWrap,
  TextWrapper,
  TextWrapper2,
  Texttwo,
  Heading2,
  Text,
  FormButton,
} from './ShopLoginElements';

const ShopRegister3 = ({ profile, fetchProfile, updateStatus, loading }) => {
  const history = useHistory();

  const getProfileData = async () => {
    await fetchProfile();
  };

  const updateProfileStatus = async () => {
    await updateStatus();
    history.replace('/dashboard');
  };
  // fetch profile data
  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line
  }, []);

  const moveToDashboard = () => {
    history.replace('/dashboard');
  };

  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 20,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: profile.email ? profile.email : '',
      phonenumber: profile.phoneNumber ? profile.phoneNumber : '',
      name: profile.accountName ? profile.accountName : '',
    },
    customizations: {
      title: 'JUMGA',
      description: 'Approval Fee',
      logo:
        'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  //flutterwave payment
  const handleFlutterPayment = useFlutterwave(config);

  //sub account creation
  const createSubAccount = (profile) => {
    var request = require('request');
    var options = {
      method: 'POST',
      url:
        'https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/subaccounts',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer FLWSECK-15368e2760dc17de2eda65870b339848-X',
      },
      body: JSON.stringify({
        account_bank: '033',
        account_number: profile.accountNumber,
        business_name: profile.shopName,
        business_email: profile.email,
        business_contact: profile.shopName,
        business_contact_mobile: profile.phoneNumber,
        business_mobile: profile.phoneNumber,
        country: profile.country,

        meta: [{ meta_name: 'mem_adr', meta_value: '0x16241F327213' }],
        split_type: 'flat',
        split_value: 50,
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  };

  /** RENDER GUEST LIST */
  const renderPage = () => {
    if (loading) {
      return (
        <div
          style={{ position: 'relative', width: '100%', minHeight: '200px' }}
        >
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <Fragment>
        <Container style={{ textAlign: 'center' }}>
          <Row>
            <Col sm="6">
              <Wrapper>
                <Heading>Register</Heading>
                <Heading2>Final Step</Heading2>
                <FormContainer2>
                  <FormWrap>
                    <TextWrapper2 grey long curved>
                      <Text black>
                        An Approval Fee of{' '}
                        <b style={{ color: '#E77728' }}>$20</b> is required
                      </Text>
                    </TextWrapper2>

                    <FormButton
                      onClick={() => {
                        handleFlutterPayment({
                          callback: (response) => {
                            console.log(response);
                            if ((response.status = 'successful')) {
                              updateProfileStatus();
                              createSubAccount(profile);
                            }
                            closePaymentModal(); // this will close the modal programmatically
                          },
                          onClose: () => {},
                        });
                      }}
                    >
                      Pay Now
                    </FormButton>
                    <FormButton white onClick={() => moveToDashboard()}>
                      Pay Later
                    </FormButton>
                  </FormWrap>
                </FormContainer2>
                <TextWrapper
                  style={{ color: '#E77728' }}
                  onClick={() => history.push('/shop-register/step2')}
                >
                  <KeyboardArrowLeft />

                  <Texttwo to="/shop-register/step2" main>
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
      </Fragment>
    );
  };
  return <>{renderPage()}</>;
};

const mapStateToProps = ({ profile }) => ({
  profile: profile.data,
  loading: profile.loading,
  error: profile.error,
});

const mapDispatchToProps = {
  fetchProfile: actions.fetchProfile,
  updateStatus: actions.updateProfileStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopRegister3);
