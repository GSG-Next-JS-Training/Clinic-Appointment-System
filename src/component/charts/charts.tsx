import React from "react";
import ClinicPieChart from "../pie-chart";
import ClinicBarChart from "../bar-chart";
import { Box } from "@mui/material";

const Charts = () => {
  return (
    <Box
      className="flexCenter"
      sx={{
        mt: "2rem",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <ClinicBarChart />
      <ClinicPieChart />
    </Box>
  );
};

export default Charts;
