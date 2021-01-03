import React from 'react';
import image from '../../img/backgroundimage.svg';
import { Container, Row, Col } from 'reactstrap';

import {
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

const ShopLogin = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Col sm="6">
          <Wrapper>
            <Heading>Welcome Back</Heading>
            <FormContainer>
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

                <FormButton>Log In</FormButton>
              </StyledForm>
            </FormContainer>
            <TextWrapper>
              <Text>Don't have an account?</Text>
              <Texttwo to="/shop-register">Sign Up</Texttwo>
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

export default ShopLogin;
