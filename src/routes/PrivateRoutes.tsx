import { RouteObject } from "react-router-dom";
import Appointments from "@clinic/pages/appointments";
import DoctorDashboard from "@clinic/pages/doctor-dashboard";
import UserManagement from "@clinic/pages/user-management";
import Booking from "@clinic/pages/booking";
import GuardedRoute from "./guardedRoute";

const privateRoutes: RouteObject = {
  path: "/clinic",
  element: <GuardedRoute />,
  children: [
    {
      index: true,
      element: <h1>Landing Page</h1>,
    },
    {
      path: "add-booking",
      element: <Booking />,
    },
    {
      path: "appointments-dashboard",
      element: <Appointments />,
    },
    {
      path: "doctor-dashboard",
      element: <DoctorDashboard />,
    },
    {
      path: "user-management",
      element: <UserManagement />,
    },
  ],
};

export default privateRoutes;
