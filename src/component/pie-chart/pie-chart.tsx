import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

export default function ClinicPieChart() {
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} fontWeight="bold">
        Daily Appointment Status
      </Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Male", color: "#58A5F1" },
              { id: 1, value: 15, label: "Female", color: "#A5CFF9" },
            ],
            highlightScope: { faded: "global", highlighted: "item" },
          },
        ]}
        width={600}
        height={400}
        sx={{
          margin: 0,
          padding: 0,
          mt: 3,
        }}
      />
    </Box>
  );
}
