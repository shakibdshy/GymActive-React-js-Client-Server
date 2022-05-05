import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../Images/Banner/banner.jpg";

const Banner = () => {
    return (
        <section className='banner-area py-52 lg:py-80 text-center' style={{ backgroundImage: "url(" + bannerImg + ")" }}>
            <h2 className='text-white text-5xl xl:text-7xl font-bold uppercase'>Strong <br /> is Beautiful</h2>
            <span className='py-4 text-white block'>Strong & Healthy</span>
            <Link to='/inventory' className='mt-8 button button-outline-white'>Our Service</Link>
        </section>
    );
};

export default Banner;