import React from 'react';
import image from '../../img/backgroundimage.svg';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { KeyboardArrowLeft } from '@material-ui/icons';

import {
  Column,
  BackgroundImage,
  Image,
  Heading,
  Wrapper,
  FormContainer,
  StyledForm,
  TextWrapper,
  TextWrapper2,
  Texttwo,
  Heading2,
  Text,
  FormButton,
} from './ShopLoginElements';

const ShopRegister3 = () => {
  const history = useHistory();
  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <Col sm="6">
          <Wrapper>
            <Heading>Register</Heading>
            <Heading2>Final Step</Heading2>
            <FormContainer>
              <StyledForm>
                <TextWrapper2 grey long curved>
                  <Text black>
                    An Approval Fee of <b style={{ color: '#E77728' }}>$20</b>{' '}
                    is required
                  </Text>
                </TextWrapper2>

                <FormButton>Pay Now</FormButton>
                <FormButton white>Pay Later</FormButton>
              </StyledForm>
            </FormContainer>
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
  );
};

export default ShopRegister3;
