import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import { useFormik } from "formik";
import {
  generateTimeSlots,
  getCurrentTimeInMinutes,
  hourToMinutes,
} from "@clinic/utils";
import { INITAIL_VALUES } from "../constant";
import { FormValues } from "../types";

const useBook = () => {
  const dateRef = useRef<HTMLInputElement>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const formik = useFormik<FormValues>({
    initialValues: INITAIL_VALUES,
    onSubmit: (values, { resetForm }) => {
      console.log("Booking Submitted:", values);
      resetForm();
    },
  });

  useEffect(() => {
    setAvailableTimes(generateTimeSlots());
  }, []);

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
            const formattedDate = selectedDates[0].toISOString().split("T")[0];
            formik.setFieldValue("date", formattedDate);
          }
        },
      });
    }
  }, []);

  return { formik, availableTimes, dateRef };
};

export default useBook;
