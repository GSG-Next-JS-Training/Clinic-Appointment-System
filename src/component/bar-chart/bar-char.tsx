import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "./constant";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const chartSetting = {
  width: 600,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const legendItems = [
  { color: "#79B7F4", label: "Pending" },
  { color: "#CAE2FB", label: "Completed" },
  { color: "#3C9EDF", label: "Confirmed" },
];

export default function ClinicBarChart() {
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} fontWeight="bold">
        Daily Appointment Status
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "day" }]}
        series={[
          {
            color: "#79B7F4",
            dataKey: "pending",
            valueFormatter,
          },
          {
            color: "#CAE2FB",
            dataKey: "completed",
            valueFormatter,
          },
          {
            color: "#3C9EDF",
            dataKey: "confirmed",
            valueFormatter,
          },
        ]}
        {...chartSetting}
        sx={{
          padding: 0,
          margin: 0,
        }}
      />
      <Stack
        sx={{ display: { md: "flex", sm: "none" } }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        {legendItems.map((item) => (
          <Stack
            key={item.label}
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                bgcolor: item.color,
                borderRadius: 1,
              }}
            />
            <Typography variant="body2">{item.label}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
