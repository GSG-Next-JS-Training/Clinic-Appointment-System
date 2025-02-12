"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import classes from "./style.module.css";

interface LoaderProps {
  size?: number;
  color?: "primary" | "secondary" | "inherit";
  loading?: boolean;
}

const Loader: React.FC<Partial<LoaderProps>> = ({
  size = 60,
  color = "primary",
  loading = true,
}) => {
  
  if (!loading) return null;

  return (
    <Box className={classes.loaderContainer}>
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default Loader;
