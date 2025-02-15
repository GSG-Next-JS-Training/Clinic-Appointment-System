import { axisClasses } from "@mui/x-charts";

export const chartSetting = {
  width: 600,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

export const legendItems = [
  { color: "#79B7F4", label: "Pending" },
  { color: "#CAE2FB", label: "Completed" },
  { color: "#3C9EDF", label: "Confirmed" },
];
