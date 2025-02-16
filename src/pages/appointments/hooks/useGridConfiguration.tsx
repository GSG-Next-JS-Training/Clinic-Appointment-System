import ViewReport from "@clinic/component/view-report";
import { APPOINTMENT_STATUS } from "@clinic/constant";
import useAppointments from "@clinic/hooks/useAppointments";
import {
  getLoggedInFromLocalStorage,
  getUsersFromLocalStorage,
} from "@clinic/utils/local-storage";
import { GridColDef } from "@mui/x-data-grid";

const useGridConfiguration = () => {
  const users = getUsersFromLocalStorage();
  const { appointments } = useAppointments();

  const rows = appointments.map((appointment) => {
    const userReport = users.find(
      (user) => user.name === appointment.name
    ).report;
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
    },
    { field: "review", headerName: "Doctor Review", flex: 1, editable: true },
  ];

  return { rows, columns };
};

export default useGridConfiguration;
