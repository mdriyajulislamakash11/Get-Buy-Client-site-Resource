import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();



  if (loading) {
    return <p>Loading....</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
