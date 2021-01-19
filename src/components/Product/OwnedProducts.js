import React from 'react';
import { Container } from 'reactstrap';

import ProductForm from '../Modal/ProductForm';
import OwnedProductList from './OwnedProductList';

const OwnedProducts = () => {
  return (
    <Container>
      <ProductForm />
      <OwnedProductList />
    </Container>
  );
};

export default OwnedProducts;
