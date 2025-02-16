import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import { useFormik } from "formik";
import {
  generateTimeSlots,
  getCurrentTimeInMinutes,
  hourToMinutes,
} from "@clinic/utils";
import { INITAIL_VALUES } from "../constant";
import { FormValues, IBook } from "../types";
import { APPOINTMENT_STATUS } from "@clinic/constant";
import {
  getAppointmentsFromLocalStorage,
  getLoggedInFromLocalStorage,
  setAppointmentInLocalStorage,
} from "@clinic/utils/local-storage";
import useSnackbar from "@clinic/hooks/useSnackbar";
import { validationSchema } from "../validationSchema";
import useAppointments from "@clinic/hooks/useAppointments";

const useBook = () => {
  const dateRef = useRef<HTMLInputElement>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const { showSnackbar } = useSnackbar();
  const { updateAppointments } = useAppointments();

  const formik = useFormik<FormValues>({
    initialValues: INITAIL_VALUES,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const user = getLoggedInFromLocalStorage();
      const book: IBook = {
        id: crypto.randomUUID(),
        name: user.name,
        date: values.date,
        time: values.time,
        symptoms: values.symptoms,
        status: APPOINTMENT_STATUS.PENDING,
        doctor: "Not Assigned",
        gender: user.gender,
        report:user.report,
      };
      setAppointmentInLocalStorage(book);
      updateAppointments(getAppointmentsFromLocalStorage());
      showSnackbar({ message: "Appointment Booked Successfully!" });
      resetForm();
    },
  });

  useEffect(() => {
    if (formik.values.date) {
      const today = new Date();
      const existingBookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );

      const bookedTimes = existingBookings
        .filter((booking) => booking.date === formik.values.date)
        .map((booking) => booking.time);

      const times = generateTimeSlots();

      const currentTimeInMinutes = getCurrentTimeInMinutes();

      const isToday = formik.values.date === today.toISOString().split("T")[0];
      setAvailableTimes(
        times.filter((time) => {
          const timeInMinutes = hourToMinutes(time);
          return (
            (!isToday || timeInMinutes > currentTimeInMinutes) &&
            !bookedTimes.includes(time)
          );
        })
      );
    }
  }, [formik.values.date]);

  useEffect(() => {
    if (dateRef.current) {
      const todayString = new Date().toISOString().split("T")[0];

      flatpickr(dateRef.current, {
        dateFormat: "Y-m-d",
        minDate: todayString,
        onChange: (selectedDates: Date[]) => {
          if (selectedDates.length > 0) {
            formik.setFieldValue(
              "date",
              selectedDates[0].toLocaleDateString("en-CA")
            );
          }
        },
      });
    }
  }, []);

  useEffect(() => {
    setAvailableTimes(generateTimeSlots());
  }, []);

  return { formik, availableTimes, dateRef };
};

export default useBook;
