import { useFormik } from "formik";
import { INITAIL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { FormValues } from "../types";
import useSnackbar from "@clinic/hooks/useSnackbar";
import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { generateTimeSlots } from '@clinic/utils/index';

const useBook = () => {
  const { showSnackbar } = useSnackbar();
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      const today = new Date();
      const todayString = today.toISOString().split("T")[0];
      flatpickr(dateRef.current, {
        dateFormat: "Y-m-d",
        minDate: todayString,
      });
    }
  }, []);

  const bookAppointment = (values: FormValues) => {
    const existingBookings: FormValues[] = JSON.parse(localStorage.getItem("bookings") || "[]");

    const conflictingBooking = existingBookings.find(
      (booking) => booking.date === values.date && booking.time === values.time
    );

    if (conflictingBooking) {
      showSnackbar({ message: "This time slot is already booked. Please choose another time." });
      return;
    }

    existingBookings.push(values);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    setAvailableTimes((prevTimes) => prevTimes.filter((time) => time !== values.time));

    showSnackbar({ message: "Appointment booked successfully!" });
  };

  const formik = useFormik<FormValues>({
    initialValues: INITAIL_VALUES,
    onSubmit: (values, { resetForm }) => {
      bookAppointment(values);
      resetForm();
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (formik.values.date) {
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const bookedTimes = existingBookings
        .filter((booking) => booking.date === formik.values.date)
        .map((booking) => booking.time);

      setAvailableTimes(generateTimeSlots().filter((time) => !bookedTimes.includes(time)));
    }
  }, [formik.values.date]);

  return { formik, availableTimes, dateRef };
};

export default useBook;
