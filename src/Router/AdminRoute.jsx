// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import useAdmin from "../Hooks/useAdmin";


// const AdminRoute = ({ children }) => {
//   const location = useLocation();
//   const {loading, user} = useAuth()
//   const { isAdmin, isAdminLoading } = useAdmin();

//   if (loading || isAdminLoading) {
//     return (
//       <div className="flex justify-center items-center">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }
//   if (user ) {
//     return children;
//   }

//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;

import { Navigate, useLocation } from "react-router-dom";

import useAdmin from "../hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
      return <progress className="progress w-56"></progress>
  }

  if (user && isAdmin) {
      return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;
