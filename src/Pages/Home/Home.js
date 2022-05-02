import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Blog from '../../Components/Blog/Blog';
import Footer from '../../Layout/Footer/Footer';
import Header from '../../Layout/Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;