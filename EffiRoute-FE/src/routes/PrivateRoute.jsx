/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const user = useSelector((state) => state.account.userInfo);
  const userRole = user?.roleWithPermission?.name?.toLowerCase();

  if (!user || !user.access_token) {
    return null;
  }

  // Check if user's role is allowed to access this route
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default PrivateRoute;
