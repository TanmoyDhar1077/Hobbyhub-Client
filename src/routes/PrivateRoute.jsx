import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <Spinner />; 
  
  if (user) return children;

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;