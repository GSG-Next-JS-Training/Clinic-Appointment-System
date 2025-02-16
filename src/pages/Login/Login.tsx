import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import useLogin from "./hooks/useLogin";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import { Stack } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { USER_ROLES } from "@clinic/constant";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login: React.FC = () => {
  const { formik, userRole } = useLogin();
  const navigate = useNavigate();

  return (
    <Box className={classes.container}>
      {userRole ? (
        <Navigate
          to={
            userRole === USER_ROLES.PATIENT
              ? "/clinic/add-booking"
              : userRole === USER_ROLES.ADMIN
              ? "/clinic/user-management"
              : "/clinic/doctor-dashboard"
          }
          replace
          state={{ from: location.pathname }}
        />
      ) : (
        <Box
          className={classes.loginBox}
          sx={{
            justifyContent: { sm: "center" },
            width: { sm: "70%", md: "20%" },
          }}
        >
          <Typography variant="h5" className={classes.title}>
            Login
          </Typography>

          <FormikProvider value={formik}>
            <Form>
              <Box className={classes.bottom}>
                <Stack sx={{ gap: 2, width: "100%" }}>
                  <ClinicTextField
                    type="text"
                    name="email"
                    placeholder="user@example.com"
                    className={classes.input}
                  />
                  <Box>
                    <ClinicTextField
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={classes.input}
                    />

                    <Box
                      className="flexCenter"
                      sx={{
                        justifyContent: "flex-start",
                        mt: 1,
                        color: "#1A76D1",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/")}
                    >
                      <ArrowBackIcon /> Back
                    </Box>
                  </Box>
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: "10px 40px ",
                    color: "white",
                    borderRadius: "5px",
                    backgroundColor: "#1A76D1",
                    border: "2px solid #ffffff",
                    transition: "0.3 ease all",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "white",
                      border: "2px solid #1A76D1",
                      color: "#1A76D1",
                    },
                  }}
                  fullWidth
                >
                  Login
                </Button>
              </Box>
            </Form>
          </FormikProvider>
        </Box>
      )}
    </Box>
  );
};

const withRoutHOC = routeHOC({
  title: "logincomponent",
  pageAccessName: "login-component",
});

export default withRoutHOC(Login);
