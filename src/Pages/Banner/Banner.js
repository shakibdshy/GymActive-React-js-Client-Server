import React from "react";

const Banner = () => {
  return (
    <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      <div className='sm:text-center'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block xl:inline'>Train How</span>{" "}
          <span className='block text-indigo-600 xl:inline'>You Want</span>
        </h1>
        <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-3xl sm:mx-auto md:mt-8 md:text-xl'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center gap-4'>
          <div className='rounded-md shadow'>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
              Get started
            </a>
          </div>
          <div>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'>
              Live demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
