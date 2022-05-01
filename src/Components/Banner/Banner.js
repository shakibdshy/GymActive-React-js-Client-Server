import React from 'react';
import bannerImg from "../../Images/Banner/banner.jpg";

const Banner = () => {
    return (
        <section className='banner-area py-52 lg:py-80 text-center' style={{ backgroundImage: "url(" + bannerImg + ")" }}>
            <h2 className='text-white text-5xl xl:text-7xl font-bold uppercase'>Strong <br /> is Beautiful</h2>
            <span className='py-4 text-white block'>Strong & Healthy</span>
            <button className='mt-8 button button-outline-white'>Our Service</button>
        </section>
    );
};

export default Banner;