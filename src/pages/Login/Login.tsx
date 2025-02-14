import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useLogin from "./hooks/useLogin";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import classes from "./style.module.css";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import { Stack } from "@mui/material";

const LoginComponent: React.FC = () => {
  const { formik } = useLogin();
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };

  return (
    <Box className={classes.container}>
      <Box
        className={classes.loginBox}
        sx={{ justifyContent: { sm: "center" },width:{sm:"70%",md:"20%"} }}
      >
        <Typography variant="h5" className={classes.title}>
          {isForgotPassword ? "Forgot Password" : "Login"}
        </Typography>

        <FormikProvider value={formik}>
          <Form>
            {!isForgotPassword ? (
              <Box className={classes.bottom}>
                <Stack sx={{ gap: 2, width: "100%" }}>
                  <ClinicTextField
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    className={classes.input}
                  />
                  <Box>
                    <ClinicTextField
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={classes.input}
                    />

                    <Typography
                      variant="body2"
                      className={classes.forgotPassword}
                      onClick={handleForgotPassword}
                      mt={1}
                    >
                      Forget Password?
                    </Typography>
                  </Box>
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  disabled={formik.isSubmitting}
                >
                  Login
                </Button>
              </Box>
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
    </Box>
  );
};

const withRoutHOC = routeHOC({
  title: "logincomponent",
  pageAccessName: "login-component",
});

export default withRoutHOC(LoginComponent);
