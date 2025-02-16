import  { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";
import Loader from "@clinic/component/Loader";

const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes, privateRoutes]);
  return <Suspense fallback={<Loader/>}> {appRoutes}</Suspense>;
};

export default AppRoutes;
