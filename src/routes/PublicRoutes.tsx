import { RouteObject } from "react-router-dom";
import TestComponent from "../test-component";
import Appointments from "../pages/appointments";


const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <h1>login..</h1>,
    },
    {
      path: "unauthorized",
      element: <h1>Unauthorized Access</h1>,
    },
    {
      path: "unauthenticated",
      element: <h1>Unauthenticated Access</h1>,
    },
    {
      path: "test-component",
      element: <TestComponent />,
    },
    {
      path: "Appointment-component",
      element: <Appointments />
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ],
};

export default publicRoutes;
