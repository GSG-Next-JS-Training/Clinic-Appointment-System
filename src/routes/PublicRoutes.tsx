import { RouteObject } from "react-router-dom";
import { lazy } from "react";
const ForbiddenComponent = lazy(() => import("@clinic/pages/forbidden"));
const Unauthenticated = lazy(() => import("@clinic/pages/unauthenticated"));
const Login = lazy(() => import("@clinic/pages/Login"));
const PageNotFound = lazy(() => import("@clinic/pages/pageNotFound"));
const About = lazy(() => import("@clinic/pages/about/about"));

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <About />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "unauthenticated",
      element: <Unauthenticated />,
    },
    {
      path: "forbidden-component",
      element: <ForbiddenComponent />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ],
};

export default publicRoutes;
