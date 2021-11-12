import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Owner from '../Owner/Owner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Feedback></Feedback>
            <Owner></Owner>
            <Footer></Footer>
        </div>
    );
};

export default Home;