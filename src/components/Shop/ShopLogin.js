import React, { useEffect } from 'react';
import image from '../../img/backgroundimage.svg';
import { Row, Col, Alert } from 'reactstrap';
import * as actions from '../../store/actions/authActions';
import {
  Container,
  Column,
  BackgroundImage,
  Image,
  Heading,
  Wrapper,
  FormContainer,
  StyledForm,
  FormInput,
  FormButton,
  Checkbox,
  SmallText,
  WrapperTwo,
  TextWrapper,
  Text,
  Texttwo,
} from './ShopLoginElements';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ShopLogin = ({ loading, error, uid, signIn }) => {
  const history = useHistory();

  useEffect(() => {
    if (uid && uid !== null) {
      history.replace('/dashboard');
    }
  }, [uid]);
  return (
      <Container style={{ textAlign: 'center' }}>
        <Row>
          <Col sm="6">
            <Wrapper>
              <Heading>Welcome Back</Heading>
              {error && <Alert color="danger">{error}</Alert>}
              <FormContainer
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  onSubmit={async (values, { setSubmitting }) => {
                    await signIn(values);
                    setSubmitting(false);
                  }}
              >
                <StyledForm>
                  <FormInput type="email" name="email" placeholder="Email" />
                  <FormInput
                      type="password"
                      name="password"
                      placeholder="Password"
                  />
                  <WrapperTwo>
                    <Checkbox type="checkbox" />
                    <SmallText>Keep Me Logged In</SmallText>
                  </WrapperTwo>

                  <FormButton>{loading ? 'logging in...' : ' Log In'}</FormButton>
                </StyledForm>
              </FormContainer>
              <TextWrapper>
                <Text>Don't have an account?</Text>
                <Texttwo to="/shop-register" main>
                  Sign Up
                </Texttwo>
              </TextWrapper>
            </Wrapper>
          </Col>
          <Column fluid sm="6">
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
  signIn: actions.SignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopLogin);