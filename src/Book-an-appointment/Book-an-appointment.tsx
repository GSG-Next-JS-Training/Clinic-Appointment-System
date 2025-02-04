import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useForm from "./hooks/useBook";
import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import classes from "./style.module.css";
import doctorImage from "../assets/DoctorImage.png";

const BookComponent: React.FC = () => {
  const { formik } = useForm();
  const dateRef = useRef<HTMLInputElement>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour}:00 - ${hour + 1}:00`);
    }
    return slots;
  };

  useEffect(() => {
    setAvailableTimes(generateTimeSlots());
  }, []);

  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    if (formik.values.Date) {
      const bookedTimes = existingBookings
        .filter((booking: { Date: string; Time: string }) => booking.Date === formik.values.Date)
        .map((booking) => booking.Time);

      setAvailableTimes(generateTimeSlots().filter((time) => !bookedTimes.includes(time)));
    }
  }, [formik.values.Date]);

  useEffect(() => {
    if (dateRef.current) {
      const today = new Date();
      const todayString = today.toISOString().split("T")[0];

      flatpickr(dateRef.current, {
        dateFormat: "Y-m-d",
        minDate: todayString,
        onChange: (selectedDates: Date[]) => {
          if (selectedDates.length > 0) {
            formik.setFieldValue("Date", selectedDates[0].toISOString().split("T")[0]);
          }
        },
      });
    }
  }, [formik]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        We Are Always Ready to Help You!
      </Typography>

      <div className={classes.content}>
        <FormikProvider value={formik}>
          <Form className={classes.form}>
            <Box className={classes.row}>
              <ClinicTextField
                type="text"
                name="PatientName"
                placeholder="Patient name"
                className={classes.input}
              />
              <ClinicTextField
                type="text"
                name="Contact"
                placeholder="Contact"
                className={classes.input}
              />
            </Box>

            <Box className={classes.row}>
              <ClinicTextField
                type="number"
                name="Age"
                placeholder="Age"
                className={classes.input}
              />
              <FormControl fullWidth className={classes.input}>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="Gender"
                  value={formik.values.Gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.row}>
              <input
                ref={dateRef}
                type="date"
                name="Date"
                placeholder="dd-mm-yyyy"
                value={formik.values.Date}
                onChange={(e) => formik.setFieldValue("Date", e.target.value)}
                className={classes.input}
              />
              <FormControl fullWidth className={classes.input}>
                <Select
                  name="Time"
                  value={formik.values.Time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    --:-- --
                  </MenuItem>
                  {availableTimes.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.symptomsBox}>
              <ClinicTextField
                type="text"
                name="Symptoms"
                placeholder="Describe the symptoms you are experiencing..."
                multiline
                rows={3}
                className={classes.input}
              />
            </Box>

            <Button type="submit" variant="contained" className={classes.submitButton}>
              Book An Appointment

            </Button>
          </Form>

        </FormikProvider>
        <div className={classes.imageContainer}> <img src={doctorImage} alt="Doctor and Nurse" className={classes.image} /> </div> </div> </div>
  );
};
export default BookComponent;