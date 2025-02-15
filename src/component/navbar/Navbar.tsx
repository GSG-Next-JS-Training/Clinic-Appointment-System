import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#87BFF7" }}>
        <Toolbar>
          <Tooltip title="Home Page">
            <Avatar
              alt="Clinic Logo"
              src="/clinic-appointment-system2-high-resolution-logo.png"
              sx={{ height: "50px", width: "50px", mr: 1, cursor: "pointer" }}
              variant="circular"
              onClick={() => navigate("/clinic/doctor-dashboard")}
            />
          </Tooltip>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clinic Appointment System
          </Typography>
          <Tooltip title="Logout" onClick={handleLogout}>
            <IconButton color="inherit" aria-label="logout">
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
