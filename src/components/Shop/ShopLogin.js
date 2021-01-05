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
} from './ShopLoginElements';

const ShopLogin = () => {
  return (
    <Container>
      <Row>
        <Col sm="6" style={{ height: '900px' }}>
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
                <FormButton>Log In</FormButton>
              </StyledForm>
            </FormContainer>
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
