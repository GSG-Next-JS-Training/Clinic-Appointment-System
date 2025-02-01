import { useContext } from "react";
import { SnackbarContext } from "../context/SnackbarContext";

const useSnackbar = () => {
  if (!SnackbarContext) {
    new Error("SnackbarContext should be wrapped inside the snackbar provider");
  }

  return useContext(SnackbarContext);
};

export default useSnackbar;
