import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";
import useGrid from "@clinic/hooks/useGrid";

const Grid: FC = () => {
    const { state } = useGrid();
    const {columns, rows} = state;
    
    return (
        <Box sx={{ height: 423}}>
            <DataGrid
                rows = {rows}
                columns={columns}
                sx={{
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: "#87BFF7",
                        fontSize: "16px",
                        fontWeight: "bolder",
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                        color: "white",
                    },
                    }}
                initialState={{
                    pagination: { paginationModel: { pageSize: 6 } },
                }}
                pageSizeOptions={[6]}
                checkboxSelection={false}
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default Grid;

