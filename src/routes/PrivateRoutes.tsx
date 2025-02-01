import { RouteObject } from "react-router-dom";
import GardedRoute from "./gardedRoute";

const privateRoutes: RouteObject = {
  path: "/clinic",
  children: [
    {
      element: <GardedRoute />,
      children: [
        {
          index: true,
          element: <h1>Landing Page</h1>,
        },
        {
          path: "appointments-dashboard",
          element: <h1>appointments Page</h1>,
        },
      ],
    },
  ],
};

export default privateRoutes;
