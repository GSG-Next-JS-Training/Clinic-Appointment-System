import { RouteObject } from "react-router-dom";
import GardedRoute from "./gardedRoute";
import Appointments from "@clinic/pages/appointments/appointments";
import DoctorDashboard from "@clinic/pages/doctor-dashboard";

const privateRoutes: RouteObject = {
  path: "/clinic",
  element: <GardedRoute />,
  children: [
    {
      index: true,
      element: <h1>Landing Page</h1>,
    },
    {
      path: "doctor-dashboard",
      element: <DoctorDashboard />,
    },
    {
      path: "appointments-dashboard",
      element: <Appointments />,
    },
  ],
};

export default privateRoutes;
