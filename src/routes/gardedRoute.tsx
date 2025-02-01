import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const GardedRoute: FC = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token)
    return (
      <Navigate
        to="/unauthenticated"
        replace
        state={{ from: location.pathname }}
      />
    );

  return <Outlet />;
};

export default GardedRoute;
