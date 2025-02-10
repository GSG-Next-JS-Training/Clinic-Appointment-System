import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              alt="Clinic Logo"
              src="/clinic-appointment-system2-high-resolution-logo.png"
              sx={{ width: 60, height: 60, mr: 2 }}
            />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clinic Appointment System
            </Typography>

            <IconButton color="inherit" aria-label="logout">
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}