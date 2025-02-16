import { RouteObject } from "react-router-dom";
import TestComponent from "@clinic/test-component";
import ForbiddenComponent from "@clinic/pages/forbidden";
import Unauthenticated from "@clinic/pages/unauthenticated";
import Login from "@clinic/pages/Login/Login";
import PageNotFound from "@clinic/pages/pageNotFound";
import About from "@clinic/pages/about/about";

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
      path: "test-component",
      element: <TestComponent />,
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
