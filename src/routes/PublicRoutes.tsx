import { RouteObject } from "react-router-dom";
import TestComponent from "@clinic/test-component";
import ForbiddenComponent from "@clinic/pages/forbidden";
import Unauthenticated from "@clinic/pages/unauthenticated";
import Login from "@clinic/Login/Login";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <Login/>,
    },
    {
      path: "unauthorized",
      element: <h1>Unauthorized Access</h1>,
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
      path: "forbidden-Component",
      element: <ForbiddenComponent />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ],
};

export default publicRoutes;
