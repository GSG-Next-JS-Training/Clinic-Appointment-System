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
import { Gender } from "./enum";

const BookComponent: React.FC = () => {
  const { formik } = useBook();
  const dateRef = useRef<HTMLInputElement>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const generateTimeSlots = () => Array.from({ length: 8 }, (_, i) => `${i + 9}:00 - ${i + 10}:00`);

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
            const formattedDate = selectedDates[0].toLocaleDateString("en-CA");
            formik.setFieldValue("Date", formattedDate);
          }
        },
      });
    }
  }, [formik]);

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        We Are Always Ready to Help You!
      </Typography>

      <Box className={classes.content}>
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
                <Select
                  name="Gender"
                  value={formik.values.Gender || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Gender
                  </MenuItem>
                  {Object.values(Gender).map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.row}>
              <ClinicTextField
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
        <Box className={classes.imageContainer}>
          <img src={doctorImage} alt="Doctor and Nurse" className={classes.image} />
        </Box>
      </Box>
    </Box>
  );
};

const withRoutHOC = routeHOC({
  title: "bookcomponent",
  pageAccessName: "add-booking",
});

export default withRoutHOC(BookComponent);
