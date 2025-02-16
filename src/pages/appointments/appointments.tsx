import { FC, useEffect } from "react";
import Grid from "@clinic/component/grid";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import { GridColDef } from "@mui/x-data-grid";
import useGrid from "@clinic/hooks/useGrid";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Filtering from "@clinic/component/filtering";
import withNavbar from "@clinic/component/with-navbar/with-navbar";
import { APPOINTMENT_STATUS } from "@clinic/constant";
import {
  getLoggedInFromLocalStorage,
  getUsersFromLocalStorage,
} from "@clinic/utils/local-storage";
import useAppointments from "@clinic/hooks/useAppointments";
import ViewReport from "@clinic/component/view-report";

const Appointments: FC = () => {
  const { init } = useGrid();
  const users = getUsersFromLocalStorage();
  const { appointments } = useAppointments();
 const rows = appointments.map((appointment) => {
    const userReport = users.find((user) => user.name === appointment.name).report;
    return {
      ...appointment,
      report: userReport,
    };
  });
  
  const columns: GridColDef[] = [
    { field: "name", headerName: "Patient Name", width: 150 },
    { field: "date", headerName: "Date", type: "string", width: 150 },
    { field: "time", headerName: "Time", type: "string", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: Object.values(APPOINTMENT_STATUS),
    },
    { field: "symptoms", headerName: "Symptoms", width: 150 },
    {
      field: "doctor",
      headerName: "Doctor",
      width: 150,
      type: "singleSelect",
      editable: true,
      valueOptions: ["Not Assigned", getLoggedInFromLocalStorage().name],
    },
    {
      field: "report",
      headerName: "Report",
      renderCell: ({ value }) => <ViewReport report={value} />,
    }
    ,
    { field: "review", headerName: "Doctor Review", flex: 1, editable: true },
  ];

  useEffect(() => {
    init({ rows, columns });
  }, [rows]);

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.container}>
        <Filtering />
        <Grid />
      </Container>
    </Box>
  );
};

const withRoutHOC = routeHOC({
  title: "AppointmentsDashboard",
  pageAccessName: "appointments-dashboard",
});

export default withNavbar(withRoutHOC(Appointments));
