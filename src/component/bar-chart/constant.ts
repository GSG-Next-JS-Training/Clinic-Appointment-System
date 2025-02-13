export const dataset = [
  {
    confirmed: 59,
    pending: 57,
    completed: 86,
    day: "Sunday",
  },
  {
    confirmed: 59,
    pending: 57,
    completed: 86,
    day: "Monday",
  },
  {
    confirmed: 59,
    pending: 57,
    completed: 86,
    day: "Tuesday",
  },
  {
    confirmed: 59,
    pending: 57,
    completed: 86,
    day: "Wednesday",
  },
  {
    confirmed: 59,
    pending: 57,
    completed: 86,
    day: "Thursday",
  },
];

export function valueFormatter(value: number | null) {
  return `${value} Appointments`;
}
