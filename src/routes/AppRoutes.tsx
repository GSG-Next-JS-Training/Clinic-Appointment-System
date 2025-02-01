import  { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes, privateRoutes]);
  return <Suspense fallback={<h1>Loading</h1>}> {appRoutes}</Suspense>;
};

export default AppRoutes;
