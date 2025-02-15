import { IBook } from "@clinic/pages/booking/types";
import { getAppointmentsFromLocalStorage } from "@clinic/utils/local-storage";
import React, { createContext, useState, useLayoutEffect } from "react";

interface DataSetItem {
  day: string;
  confirmed: number;
  pending: number;
  completed: number;
}

interface AppointmentsContextType {
  dataset: DataSetItem[];
  appointments: IBook[];
  updateAppointments: (appointments: IBook[]) => void;
}

export const AppointmentsContext = createContext<
  AppointmentsContextType | undefined
>(undefined);

export const AppointmentsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataset, setDataset] = useState<DataSetItem[]>([]);
  const [appointments, setAppointments] = useState<IBook[]>([]);

  useLayoutEffect(() => {
    const appointment =
      appointments.length > 0
        ? appointments
        : getAppointmentsFromLocalStorage();
    aggregateAppointments(appointment);
    setAppointments(appointment);
  }, []);

  const aggregateAppointments = (appointments: IBook[]) => {
    const aggregatedData = Object.entries(
      appointments
        .map((appointment) => ({
          day: new Date(appointment.date).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          confirmed: appointment.status === "Confirmed" ? 1 : 0,
          pending: appointment.status === "Pending" ? 1 : 0,
          completed: appointment.status === "Completed" ? 1 : 0,
        }))
        .reduce<Record<string, DataSetItem>>((acc, curr) => {
          if (!acc[curr.day]) {
            acc[curr.day] = { ...curr };
          } else {
            acc[curr.day].confirmed += curr.confirmed;
            acc[curr.day].pending += curr.pending;
            acc[curr.day].completed += curr.completed;
          }
          return acc;
        }, {})
    ).map(([_, data]) => data);

    setDataset(aggregatedData);
  };

  const updateAppointments = (newAppointments: IBook[]) => {
    aggregateAppointments(newAppointments);
    setAppointments(newAppointments);
  };

  return (
    <AppointmentsContext.Provider
      value={{ appointments, dataset, updateAppointments }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
