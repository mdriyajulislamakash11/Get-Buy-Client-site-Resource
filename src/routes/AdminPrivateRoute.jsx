import React from "react";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation()

  if(loading || isLoading){
    return <p>Loadinggggggg.......</p>
  }

  if(user && isAdmin){
    return children;
  };




  return <Navigate to='/login'  stats={{from : location }} replace />
};

export default AdminPrivateRoute;
