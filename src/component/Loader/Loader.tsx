"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./style.module.css";
interface LoaderProps {
  size?: number;
  color?: "primary" | "secondary" | "inherit";
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 60,
  color = "primary",
  loading = true,
}) => {
  if (!loading) return null;
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress size={size} color={color} />
    </div>
  );
};

export default Loader;
