import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import GuardedRoute from "./guardedRoute";
const Appointments = lazy(() => import("@clinic/pages/appointments"));
const DoctorDashboard = lazy(() => import("@clinic/pages/doctor-dashboard"));
const UserManagement = lazy(() => import("@clinic/pages/user-management"));
const Booking = lazy(() => import("@clinic/pages/booking"));

const privateRoutes: RouteObject = {
  path: "/clinic",
  element: <GuardedRoute />,
  children: [
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
