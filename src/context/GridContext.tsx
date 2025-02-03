import { 
    createContext, 
    ReactNode, 
    useCallback, 
    useReducer 
} from "react";
import { 
    gridReducer, 
    IActionPayload, 
    IGridState, 
    initialState, 
    Reducer_Action_Type 
} from "../reducers/gridReducer.tsx";


export const GridContextValues = (initialState: IGridState) => {
    const [state, dispatch] = useReducer(gridReducer, initialState);

    const Init = useCallback(
        (payload: IActionPayload) => dispatch({type: Reducer_Action_Type.INIT, payload}),
        []
    );
return { Init, state};
}

type GridContextValuesType = ReturnType<typeof GridContextValues>;

const initialContextValue: GridContextValuesType = {
    state: initialState,
    Init: () => {}
}
export const GridContext = createContext<GridContextValuesType>(initialContextValue);

export const GridProvider = ({children}: {children: ReactNode}) =>{
    const contextValues = GridContextValues(initialState);
    return(
        <GridContext.Provider value = {contextValues}> 
        {children}
        </GridContext.Provider>
    );
};

