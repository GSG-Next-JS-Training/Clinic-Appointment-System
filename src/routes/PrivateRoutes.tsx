import { RouteObject } from "react-router-dom";
import GardedRoute from "./gardedRoute";
import Appointments from "@clinic/pages/appointments/appointments";
import DoctorDashboard from "@clinic/pages/doctor-dashboard";
import UserManagement from "@clinic/pages/user-management";
import BookAnAppointment from "@clinic/Book-an-appointment";

const privateRoutes: RouteObject = {
  path: "/clinic",
  element: <GardedRoute />,
  children: [
    {
      index: true,
      element: <h1>Landing Page</h1>,
    },
    {
      path: "add-booking",
      element: <BookAnAppointment />,
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
