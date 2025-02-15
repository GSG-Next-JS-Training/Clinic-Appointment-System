import useGrid from "@clinic/hooks/useGrid";
import useSnackbar from "@clinic/hooks/useSnackbar";

export const useGridData = () => {
  const { showSnackbar } = useSnackbar();
  const { state, updateRows } = useGrid();
  const { columns, rows, filters } = state;
  
  const filteredRows = rows.filter((row) => {
    const nameMatches = filters.name
      ? row.name
          .toLowerCase()
          .trim()
          .includes(filters.name.toLowerCase().trim())
      : true;
    const statusMatches =
      filters.status === "All" || filters.status == row.status;
    return nameMatches && statusMatches;
  });

  const handleRowUpdate = (updatedRow: any) => {
    const checkRow = rows.find((row) => row.id === updatedRow.id);
    if (!checkRow) {
      return;
    }
    if(updatedRow.review !== checkRow.review && !updatedRow.review.trim()){
      throw new Error("Review cannot be empty");
    }
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
    });
    return updatedRow;
  };

  return { filteredRows, handleRowUpdate, showSnackbar, columns };
};
