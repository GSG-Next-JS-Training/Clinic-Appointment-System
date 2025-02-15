import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { valueFormatter } from "./constant";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  chartSetting,
  legendItems,
} from "./chart-setting";
import useAppointments from "@clinic/hooks/useAppointments";

export default function ClinicBarChart() {
  const { dataset } = useAppointments();

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
