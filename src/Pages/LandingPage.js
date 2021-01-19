import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Hero from '../components/Hero/Hero';
import ProductSection from '../components/ProductSection/ProductSection';
import { fetchAllProducts } from '../store/actions/productActions';

const LandingPage = () => {
  const products = useSelector((state) => state.cart.fetchProduct);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(fetchAllProducts());
  };

  return (
    <div>
      <Hero />
      <ProductSection
        //buttonText={'See All Most Popular'}
        text={'Most Popular'}
      />
      <ProductSection
        clicked={fetchProducts}
        buttonText={products.loading ? 'Loading...' : 'View All Products'}
        text={'Best Deals'}
        products={products.products}
      />
    </div>
  );
};

export default LandingPage;
