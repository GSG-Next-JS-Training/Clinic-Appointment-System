import { useContext } from "react";
import { GridContext } from "@clinic/context/GridContext";

const useGrid = () => {
    const context = useContext(GridContext);
    if(!context){
        throw new Error("GridContext should be wrapped inside the snackbar provider");
    }
    return context;
};

export default useGrid;