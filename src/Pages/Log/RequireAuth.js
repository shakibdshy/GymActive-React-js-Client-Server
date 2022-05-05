import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <div id="loading-2"></div>;
  }

  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return (
      <div className='text-center mt-5'>
        <h3 className='text-danger'>Your Email is not verified!!</h3>
        <h5 className='text-success'> Please Verify your email address</h5>
        <button
          className='button button-red my-5'
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}>
          Send Verification Email Again
        </button>
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default RequireAuth;
