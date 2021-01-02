import React from 'react';

import Hero from '../components/Hero/Hero';
import ProductSection from '../components/ProductSection/ProductSection';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <ProductSection
        buttonText={'See All Most Popular'}
        text={'Most Popular'}
      />
      <ProductSection buttonText={'See All Deals'} text={'Best Deals'} />
    </div>
  );
};

export default LandingPage;
