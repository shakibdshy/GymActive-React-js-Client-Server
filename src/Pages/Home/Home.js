import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Gym Active - React Template</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <Banner />
        </>
    );
};

export default Home;