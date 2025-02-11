import { FC, useEffect } from "react";
import Grid from "@clinic/component/grid";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import { GridColDef } from "@mui/x-data-grid";
import useGrid from "@clinic/hooks/useGrid";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Filtering from "@clinic/component/filtering";
import { APPOINTMENT_STATUS } from "@clinic/constant.js";

const Appointments: FC = () => {
    const {init} = useGrid();

    const columns: GridColDef[] = [
        { field: "patientName", headerName: "Name", width: 150 },
        { field: "date", headerName: "Date", type: "string", width: 150, },
        { field: "status", headerName: "Status", width: 150, editable: true, type: "singleSelect", valueOptions: Object.values(APPOINTMENT_STATUS)},
        { field: "note", headerName: "Note", width: 150 },
        { field: "review", headerName: "Doctor Review", flex: 1, editable: true },
    ];
    
    const rows = [
        { id: 1, patientName: "John Doe", date: "2025-02-01T12:30:00", status: "Pending", note: "Needs review", review: "Dr. Smith" },
        { id: 2, patientName: "Jane Smith", date: "2025-02-02T13:00:00", status: "Completed", note: "Reviewed", review: "Dr. Adams" },
        { id: 3, patientName: "Mary Johnson", date: "2025-02-03T14:00:00", status: "In Progress", note: "Under observation", review: "Dr. Lee" },
        { id: 4, patientName: "James Brown", date: "2025-02-04T15:30:00", status: "Completed", note: "Follow-up scheduled", review: "Dr. Taylor" },
        { id: 5, patientName: "Patricia Williams", date: "2025-02-05T16:45:00", status: "Pending", note: "Awaiting test results", review: "Dr. Green" },
        { id: 6, patientName: "John Doe", date: "2025-02-01T12:30:00", status: "Pending", note: "Needs review", review: "Dr. Smith" },
        { id: 7, patientName: "Jane Smith", date: "2025-02-02T13:00:00", status: "Completed", note: "Reviewed", review: "Dr. Adams" },
        { id: 8, patientName: "Mary Johnson", date: "2025-02-03T14:00:00", status: "In Progress", note: "Under observation", review: "Dr. Lee" },
        { id: 9, patientName: "James Brown", date: "2025-02-04T15:30:00", status: "Completed", note: "Follow-up scheduled", review: "Dr. Taylor" },
        { id: 10, patientName: "Patricia Williams", date: "2025-02-05T16:45:00", status: "Pending", note: "Awaiting test results", review: "Dr. Green" },
    ];

    useEffect(() =>
        init({ rows, columns }),
        []
    );

    return (
        <Box className = {classes.wrapper} >
            <Container className = {classes.container}>
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

export default withRoutHOC(Appointments);