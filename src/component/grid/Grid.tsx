import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import { useGridData } from "./hooks/useGridData";

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
