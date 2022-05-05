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

  if (loading) {
    return <div id="loading-2"></div>;
  }

  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
