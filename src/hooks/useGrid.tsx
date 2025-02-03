import { useContext } from "react"
import { GridContext } from "../context/GridContext.tsx"

const useGrid = () => {
    const context = useContext(GridContext);
    if(!context){
        throw new Error("GridContext should be wrapped inside the snackbar provider")
    }
    return useContext(GridContext);
};

export default useGrid;