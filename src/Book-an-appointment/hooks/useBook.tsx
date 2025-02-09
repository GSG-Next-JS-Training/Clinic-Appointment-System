import { useFormik } from "formik";
import { INITAIL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { FormValues } from "../types";
import useSnackbar from "@clinic/hooks/useSnackbar";
import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

const useForm = () => {
  const { showSnackbar } = useSnackbar();
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const dateRef = useRef<HTMLInputElement>(null);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour}:00 - ${hour + 1}:00`);
    }
    return slots;
  };
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
      (booking) => booking.Date === values.Date && booking.Time === values.Time
    );

    if (conflictingBooking) {
      showSnackbar({ message: "This time slot is already booked. Please choose another time." });
      return;
    }

    existingBookings.push(values);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    setAvailableTimes((prevTimes) => prevTimes.filter((time) => time !== values.Time));

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
    if (formik.values.Date) {
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const bookedTimes = existingBookings
        .filter((booking) => booking.Date === formik.values.Date)
        .map((booking) => booking.Time);

      setAvailableTimes(generateTimeSlots().filter((time) => !bookedTimes.includes(time)));
    }
  }, [formik.values.Date]);

  return { formik, availableTimes, dateRef };
};

export default useForm;
