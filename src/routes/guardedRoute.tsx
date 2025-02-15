import { getTokenFromLocalStorage } from "@clinic/utils/local-storage";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GuardedRoute: FC = () => {
  const location = useLocation();
  const token = getTokenFromLocalStorage();

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

export default GuardedRoute;
