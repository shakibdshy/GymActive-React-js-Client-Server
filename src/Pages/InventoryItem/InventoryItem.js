import React from "react";
import { Link } from "react-router-dom";

const InventoryItem = () => {
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 px-4'>
      <div className='rounded-xl relative'>
        <img
          className='rounded-xl w-full h-[270px] object-cover'
          src='https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <span className='py-1 px-3 absolute bottom-4 left-4 inline-block uppercase text-sm font-semibold rounded bg-red-600 text-white'>
          $1000
        </span>
      </div>
      <div className='inventory-content mt-8 py-6 px-8 bg-[#F6F6F6] rounded-[10px] transition-all ease-in-out duration-300 hover:bg-red-500'>
        <ul className='flex flex-wrap items-center gap-4'>
          <li>
            <span className='font-semibold text-black'>Supplier:</span>
            <span className='ml-2 text-[#777777]'>Bench Press</span>
          </li>
          <li>
            <span className='font-semibold text-black'>Quantity:</span>
            <span className='ml-2 text-[#777777]'>10</span>
          </li>
        </ul>
        <h3 className='mt-4 font-bold text-xl text-black hover:text-red-500 transition-all ease-in-out duration-300'>
          <Link to='https://'>Dumbbell's Equipment</Link>
        </h3>
        <p className='mt-4 text-[#777777]'>
          Will you make it to that last hill? Can you push yourself above and
          beyond your last competitor
        </p>
      </div>
    </div>
  );
};

export default InventoryItem;
