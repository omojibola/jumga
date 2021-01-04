import React from "react";
import Hero from "../../components/Hero/Hero";
import ProductSection from "../../components/ProductSection/ProductSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductSection
                buttonText={'See All Most Popular'}
                text={'Most Popular'}
            />
            <ProductSection buttonText={'See All Deals'} text={'Best Deals'} />
            <Footer />
        </div>
    )
};

export default Home;