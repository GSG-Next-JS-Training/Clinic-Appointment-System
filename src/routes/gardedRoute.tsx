import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "@clinic/component/navbar/layout";

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
