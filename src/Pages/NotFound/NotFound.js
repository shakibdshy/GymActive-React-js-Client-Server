import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='py-[150px] text-center'>
            <h3 className='mb-0 text-[100px] font-light text-[#222423] tracking-[20px] uppercase leading-none'>Oops!</h3>
            <h2 className='text-[170px] font-bold text-red-500 leading-[170px] uppercase'>404</h2>
            <h4 className='mb-8 font-light text-[#222423] text-[42px] uppercase'>Page Not Found</h4>
            <Link className='button button-red' to='/'>Back To Home</Link>
        </section>
    );
};

export default NotFound;