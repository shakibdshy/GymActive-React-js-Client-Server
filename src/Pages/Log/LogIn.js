import React from "react";
import { Link } from "react-router-dom";
import InputField from "../../Components/InputField/InputField";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import logo from "../../logo.png";

const LogIn = () => {
  return (
    <form>
      <div className='h-full bg-gradient-to-tr from-cyan-500 to-blue-500 w-full py-16 pt-32 px-4'>
        <div className='flex flex-col items-center justify-center'>
          <img className='width={188px} height={74px}' src={logo} alt='' />
          <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full max-w-[435px] p-10 mt-16'>
            <p
              aria-label='Login to your account'
              className='text-2xl font-extrabold leading-6 text-gray-800'>
              Login to your account
            </p>
            <p className='text-sm mt-4 font-medium leading-none text-gray-500'>
              Dont have account?{" "}
              <Link
                to='/signup'
                aria-label='Sign up here'
                className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer'>
                {" "}
                Sign up here
              </Link>
            </p>
            <SocialLogin />
            <div>
              <InputField label='Email' type='email' name='email' placeholder='Enter your Email' />              
            </div>
            <div>
              <InputField label='Password' type='password' name='password' placeholder='Your Password' />              
            </div>
            <div className='mt-8'>
              <button
                type='button'
                aria-label='create my account'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
