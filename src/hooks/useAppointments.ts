import { AppointmentsContext } from "@clinic/context/appointmentContext";
import { useContext } from "react";

const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error(
      "useAppointments must be used within an AppointmentsProvider"
    );
  }
  return context;
};

export default useAppointments;
