import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductSection from './components/ProductSection/ProductSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductSection
        buttonText={'See All Most Popular'}
        text={'Most Popular'}
      />
      <ProductSection buttonText={'See All Deals'} text={'Best Deals'} />
      <Footer />
    </div>
  );
}

export default App;
