import { RouteObject } from "react-router-dom";
import TestComponent from "@clinic/test-component";
import ForbiddenComponent from "@clinic/pages/forbidden";
import Unauthenticated from "@clinic/pages/unauthenticated";
import Login from "@clinic/pages/Login/Login";
import PageNotFound from "@clinic/pages/pageNotFound";

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
    }, {
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
