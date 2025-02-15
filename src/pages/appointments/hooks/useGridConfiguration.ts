import { APPOINTMENT_STATUS } from "@clinic/constant";
import { GridColDef } from "@mui/x-data-grid";

export const useGridConfiguration=()=>{
    
  const columns: GridColDef[] = [
    { field: "patientName", headerName: "Name", width: 150 },
    { field: "date", headerName: "Date", type: "string", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: Object.values(APPOINTMENT_STATUS),
    },
    { field: "note", headerName: "Note", width: 150 },
    { field: "review", headerName: "Doctor Review", flex: 1, editable: true },
  ];

//   const rows=getA
}