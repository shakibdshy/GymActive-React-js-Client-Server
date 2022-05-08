import React, { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import auth from "../../firebase.init";
import logo from "../../logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const LogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let errorElement;

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  if (error) {
    toast.error(`${error?.message}`)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email || password) {
      await signInWithEmailAndPassword(email, password);
      const { data } = await axios.post("https://gymactive.herokuapp.com/login", { email });
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Successfully Login");
      setIsLoading(false);
    } else {
      toast.error("Please enter valid details");
      setIsLoading(false);
    }
  };

  const navigateRegister = () => {
    navigate("/signup");
  };

  const resetPassword = async (e) => {
    const email = emailRef.current.value;
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
        <div className='h-full bg-gradient-to-tr from-cyan-500 to-blue-500 w-full py-16 pt-14 px-4'>
          <div className='flex flex-col items-center justify-center'>
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
                <label htmlFor='email' className='label-control'>Email</label>
                <input className="input-control"
                  ref={emailRef}
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Enter your Email'
                  required />
              </div>
              <div>
                <label htmlFor='password' className='label-control'>Password</label>
                <input className="input-control"
                  ref={passwordRef}
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Enter your Password'
                  required />
                <span
                  className='text-blue-500 cursor-pointer'
                  onClick={resetPassword}>
                  Forget Password
                </span>
              </div>
              <div className='mt-8'>
                <button
                  type='submit'
                  aria-label='create my account'
                  className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>
                  Sign In
                </button>
              </div>
              <ClipLoader className='mx-auto mt-4' color={"#36D7B7"} loading={loading} size={30} />
              {errorElement}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LogIn;
