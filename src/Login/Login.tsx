import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useLogin from "./hooks/useLogin";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import classes from "./style.module.css";
import routeHOC from "@clinic/routes/HOCs/routeHOC";

const LoginComponent: React.FC = () => {
  const { formik } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.loginBox}>
        <Typography variant="h5" className={classes.title}>
          {isForgotPassword ? "Forgot Password" : "Login"}
        </Typography>

        <FormikProvider value={formik}>
          <Form className={classes.form}>
            {!isForgotPassword ? (
              <>
                <ClinicTextField
                  type="text"
                  name="email"
                  placeholder="mays@gmail.com"
                  className={classes.input}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <Box className={classes.passwordBox}>
                  <ClinicTextField
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={classes.input}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Box>

                <Typography
                  variant="body2"
                  className={classes.forgotPassword}
                  onClick={handleForgotPassword}
                >
                  Forget Password?
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  disabled={formik.isSubmitting}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <ClinicTextField
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={classes.input}
                />
                <Button variant="contained" className={classes.submitButton2}>
                  Send Reset Link
                </Button>

                <Typography
                  variant="body2"
                  className={classes.forgotPassword}
                  onClick={handleBackToLogin}
                >
                  Back to Login
                </Typography>
              </>
            )}
          </Form>
        </FormikProvider>
      </Box>

      <Box className={classes.imageContainer}></Box>
    </Box>
  );
};

const withRoutHOC = routeHOC({
  title: "logincomponent",
  pageAccessName: "login-component",
});

export default withRoutHOC(LoginComponent);
