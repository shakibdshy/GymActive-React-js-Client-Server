import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField/InputField";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import auth from "../../firebase.init";
import logo from "../../logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(email, password);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Successfully Login");
    } catch (error) {
      toast.error("Please enter valid details");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async (e) => {
    const email = e.target.email.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent successfully");
    } else {
      toast.error("Please enter email");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
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
                  onClick={navigateRegister}
                  aria-label='Sign up here'
                  className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer'>
                  {" "}
                  Sign up here
                </Link>
              </p>
              <SocialLogin />
              <div>
                <InputField
                  label='Email'
                  type='email'
                  name='email'
                  placeholder='Enter your Email'
                />
              </div>
              <div>
                <InputField
                  label='Password'
                  type='password'
                  name='password'
                  placeholder='Your Password'
                />
              </div>
              <div className='mt-8'>
                <button
                  type='submit'
                  aria-label='create my account'
                  className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>
                  Sign In
                </button>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LogIn;
