import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classes from "./style.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.container}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            textTransform: "capitalize",
          }}
        >
          your health, our priority
          <Typography
            component="span"
            variant="inherit"
            sx={{
              display: "block",
              marginTop: "10px",
            }}
          >
            smart & secure medical solutions
          </Typography>
        </Typography>
        <Typography className={classes.p}>
          We provide innovative, smart, and secure medical solutions to ensure
          safety, efficiency, and peace of mind
        </Typography>
        <Box>
          <Button
            sx={{
              padding: "10px 40px ",
              color: "white",
              borderRadius: "6px",
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
            onClick={() => navigate("login")}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
