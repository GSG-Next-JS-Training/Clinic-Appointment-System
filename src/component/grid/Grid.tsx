import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import useGrid from "@clinic/hooks/useGrid";
import useSnackbar from "@clinic/hooks/useSnackbar.js";

export const useGridData = () => {
  const { showSnackbar } = useSnackbar();
  const { state, updateRows } = useGrid();
  const { columns, rows, filters } = state;

  const filteredRows = rows.filter((row) => {
    const nameMatches = filters.name
      ? row.patientName
          .toLowerCase()
          .trim()
          .includes(filters.name.toLowerCase().trim())
      : true;
    const statusMatches =
      filters.status === "All" || filters.status == row.status;
    return nameMatches && statusMatches;
  });

  const handleRowUpdate = (updatedRow: any) => {
    if (!updatedRow.review.trim()) {
      throw new Error("Review cannot be empty");
    }
    const checkRow = rows.find((row) => row.id === updatedRow.id);
    if (checkRow && JSON.stringify(checkRow) === JSON.stringify(updatedRow)) {
      return updatedRow;
    }
    const updatedRows = rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    updateRows({ rows: updatedRows });
    showSnackbar({
      message: "Row Updated successfully",
      severity: "success",
      variant: "outlined",
    });
    return updatedRow;
  };

  return { filteredRows, handleRowUpdate, showSnackbar, columns };
};

const Grid: FC = () => {
  const { handleRowUpdate, filteredRows, showSnackbar, columns } =
    useGridData();

  return (
    <Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        processRowUpdate={handleRowUpdate}
        onProcessRowUpdateError={(error) =>
          showSnackbar({
            title: "Error on Updating Row",
            message: `${error}`,
            severity: "error",
            variant: "outlined",
          })
        }
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#eceff1",
            fontSize: "16px",
            fontWeight: "bolder",
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 8 } },
        }}
        pageSizeOptions={[8]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Grid;
