import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useBook from "./hooks/useBook";
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
import withNavbar from "@clinic/component/with-navbar";

const BookComponent: React.FC = () => {
  const { formik, availableTimes, dateRef } = useBook();

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
                inputRef={dateRef}
                type="date"
                name="date"
                placeholder="dd-mm-yyyy"
                className={classes.input}
              />
              <FormControl
                fullWidth
                className={classes.input}
                error={formik.touched.time && Boolean(formik.errors.time)}
              >
                <Select
                  name="time"
                  value={formik.values.time}
                  displayEmpty
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
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
                {formik.touched.time && formik.errors.time && (
                  <Typography
                    variant="body2"
                    color="error"
                    className={classes.errorMessage}
                  >
                    {formik.errors.time}
                  </Typography>
                )}
              </FormControl>
            </Box>

            <Box className={classes.symptomsBox}>
              <ClinicTextField
                type="text"
                name="symptoms"
                placeholder="Describe the symptoms you are experiencing..."
                multiline
                rows={3}
                className={classes.input}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              className={classes.submitButton}
            >
              Book An Appointment
            </Button>
          </Form>
        </FormikProvider>
        <Box className={classes.imageContainer}>
          <img
            src={doctorImage}
            alt="Doctor and Nurse"
            className={classes.image}
          />
        </Box>
      </Box>
    </Box>
  );
};

const withRouteHOC = routeHOC({
  title: "bookcomponent",
  pageAccessName: "add-booking",
});

export default withNavbar(withRouteHOC(BookComponent));
