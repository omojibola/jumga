import React from 'react';
import {
  ImageTop,
  StyledCardTitle,
  ButtonWrapper,
  ProductButtonTwo,
  StyledCardText,
} from './ProductElements';
import { Card, CardBody, Container } from 'reactstrap';

const OwnedProductList = ({ item }) => {
  const checkId = (id) => {
    console.log(id);
  };
  return (
    <Container style={{ marginTop: 30 }}>
      {item && typeof item !== undefined && (
        <Card style={{ marginBottom: 30 }}>
          <ImageTop
            top
            width="100%"
            src={item.productImage}
            alt={item.productName}
          />

          <CardBody>
            <StyledCardTitle tag="h5">{item.productName}</StyledCardTitle>
            <StyledCardText>$ {item.price}</StyledCardText>
          </CardBody>
          <ButtonWrapper>
            <ProductButtonTwo
              className="btn btn-dark btn-sm"
              onClick={() => checkId(item.id)}
            >
              Edit
            </ProductButtonTwo>
            <ProductButtonTwo className="btn btn-danger btn-sm">
              Delete
            </ProductButtonTwo>
          </ButtonWrapper>
        </Card>
      )}
    </Container>
  );
};

export default OwnedProductList;
