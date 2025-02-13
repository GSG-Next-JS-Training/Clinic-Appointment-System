import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useBook from "./hooks/useBook";
import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./style.module.css";
import doctorImage from "@clinic/assets/DoctorImage.png";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import { Gender } from "./types";
import { generateTimeSlots } from "@clinic/utils";

const BookComponent: React.FC = () => {
  const { formik } = useBook();
  const dateRef = useRef<HTMLInputElement>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    setAvailableTimes(generateTimeSlots());
  }, []);

  useEffect(() => {
    if (formik.values.date) {
      const today = new Date();
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const bookedTimes = existingBookings
        .filter((booking) => booking.date === formik.values.date)
        .map((booking) => booking.time);

      const times = generateTimeSlots();
      const now = new Date();
      const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes(); // الوقت الحالي بالدقائق

      const isToday = formik.values.date === today.toISOString().split("T")[0]; // التحقق إذا كان التاريخ المختار هو اليوم الحالي

      if (isToday) {
        setAvailableTimes(
          times.filter((time) => {
            const [hour, minute] = time.split(":").map(Number);
            const timeInMinutes = hour * 60 + minute;

            return timeInMinutes > currentTimeInMinutes && !bookedTimes.includes(time);
          })
        );
      } else {

        setAvailableTimes(times.filter((time) => !bookedTimes.includes(time)));
      }
    }
  }, [formik.values.date]);


  useEffect(() => {
    if (dateRef.current) {
      const today = new Date();
      const todayString = today.toISOString().split("T")[0];

      flatpickr(dateRef.current, {
        dateFormat: "Y-m-d",
        minDate: todayString,
        onChange: (selectedDates: Date[]) => {
          if (selectedDates.length > 0) {
            const selectedDate = selectedDates[0];
            const year = selectedDate.getFullYear();
            const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
            const day = String(selectedDate.getDate()).padStart(2, "0");
            const formattedDate = `${year}-${month}-${day}`;

            formik.setFieldValue("date", formattedDate);
          }
        },
      });
    }
  }, []);


  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        We Are Always Ready to Help You!
      </Typography>

      <Box className={classes.content}>
        <FormikProvider value={formik}>
          <Form className={classes.form}>
            <Box className={classes.row}>
              <ClinicTextField type="text" name="patientName" placeholder="Patient name" className={classes.input} />
              <ClinicTextField type="text" name="contact" placeholder="Contact" className={classes.input} />
            </Box>

            <Box className={classes.row}>
              <ClinicTextField type="number" name="age" placeholder="Age" className={classes.input} />
              <FormControl fullWidth className={classes.input} error={formik.touched.gender && Boolean(formik.errors.gender)}>
                <Select name="gender" value={formik.values.gender} onChange={formik.handleChange} displayEmpty>
                  <MenuItem value="" disabled>Select Gender</MenuItem>
                  {Object.values(Gender).map((gender) => (
                    <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                  ))}
                </Select>
                {formik.touched.gender && formik.errors.gender && (
                  <Typography variant="body2" color="error" className={classes.errorMessage}>
                    {formik.errors.gender}
                  </Typography>
                )}
              </FormControl>
            </Box>

            <Box className={classes.row}>
              <ClinicTextField inputRef={dateRef} type="text" name="date" placeholder="dd-mm-yyyy" className={classes.input} />
              <FormControl fullWidth className={classes.input} error={formik.touched.time && Boolean(formik.errors.time)}>
                <Select name="time" value={formik.values.time} displayEmpty onBlur={formik.handleBlur} onChange={formik.handleChange}>
                  <MenuItem value="" disabled>--:-- --</MenuItem>
                  {availableTimes.map((time) => (
                    <MenuItem key={time} value={time}>{time}</MenuItem>
                  ))}
                </Select>
                {formik.touched.time && formik.errors.time && (
                  <Typography variant="body2" color="error" className={classes.errorMessage}>
                    {formik.errors.time}
                  </Typography>
                )}
              </FormControl>
            </Box>

            <Box className={classes.symptomsBox}>
              <ClinicTextField type="text" name="symptoms" placeholder="Describe the symptoms you are experiencing..." multiline rows={3} className={classes.input} />
            </Box>

            <Button type="submit" variant="contained" className={classes.submitButton}>
              Book An Appointment
            </Button>
          </Form>
        </FormikProvider>
        <Box className={classes.imageContainer}>
          <img src={doctorImage} alt="Doctor and Nurse" className={classes.image} />
        </Box>
      </Box>
    </Box>
  );
};

const withRouteHOC = routeHOC({
  title: "bookcomponent",
  pageAccessName: "add-booking",
});

export default withRouteHOC(BookComponent);