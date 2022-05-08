import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    return (
        <section className='py-32'>
            <div className='mb-16 container mx-auto text-center px-8'>
                <span className="mb-2 font-bold text-xl text-center text-red-500 block uppercase">Equipment</span>
                <h2 className='text-4xl text-black uppercase font-bold'>
                <span className='text-red-600'>Gym</span> Equipment
                </h2>
            </div>
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-wrap">
                    <InventoryItem />
                </div>
                <div className="mt-20 text-center">
                    <Link to='/manage'  className="button button-black inline-block">Manage Inventories</Link>
                </div>
            </div>
        </section>
    );
};

export default Inventory;