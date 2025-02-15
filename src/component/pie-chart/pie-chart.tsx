import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useAppointments from "@clinic/hooks/useAppointments";

export default function ClinicPieChart() {
  const { appointments } = useAppointments();

  const { maleCount, femaleCount } = appointments.reduce(
    (acc, person) => {
      if (person.gender === "Male") {
        acc.maleCount++;
      } else if (person.gender === "Female") {
        acc.femaleCount++;
      }
      return acc;
    },
    { maleCount: 0, femaleCount: 0 }
  );

  return (
    <Box>
      <Typography variant="h5" textAlign="center" ml={-5} fontWeight="bold">
        Daily Appointment Status
      </Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: maleCount, label: "Male", color: "#58A5F1" },
              { id: 1, value: femaleCount, label: "Female", color: "#A5CFF9" },
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
