import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGitHub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;

  if (loading || loading1 || loading2) {
    return "Loading...";
  }

  if (error || error1 || error2) {
    errorElement = (
      <p className='text-danger'>
        Error: {error?.message} {error1?.message} {error2?.message}
      </p>
    );
  }

  if (user || user1 || user2) {
    navigate(from, { replace: true });
  }

  return (
    <>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        aria-label='Continue with google'
        type='button'
        className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'>
        <FcGoogle />
        <p className='text-base font-medium ml-4 text-gray-700'>
          Continue with Google
        </p>
      </button>
      <button
        onClick={() => signInWithGitHub()}
        aria-label='Continue with github'
        type='button'
        className='focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'>
        <FaFacebook />
        <p className='text-base font-medium ml-4 text-gray-700'>
          Continue with Github
        </p>
      </button>
      <button
        onClick={() => signInWithFacebook()}
        aria-label='Continue with twitter'
        type='button'
        className='focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'>
        <FaGithub />
        <p className='text-base font-medium ml-4 text-gray-700'>
          Continue with Facebook
        </p>
      </button>
      <div className='w-full flex items-center justify-between py-5'>
        <hr className='w-full bg-gray-400' />
        <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
          OR
        </p>
        <hr className='w-full bg-gray-400  ' />
      </div>
    </>
  );
};

export default SocialLogin;
