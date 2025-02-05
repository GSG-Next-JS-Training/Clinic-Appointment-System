import { RouteObject } from "react-router-dom";
import GardedRoute from "./gardedRoute";
import Appointments from "@clinic/pages/appointments/appointments";
import BookAnAppointment from "@clinic/Book-an-appointment/Book-an-appointment";

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
          element: <Appointments />,
        },
        {
          path: "add-booking",
          element: <BookAnAppointment />
        },
      ],
    },
  ],
};

export default privateRoutes;
