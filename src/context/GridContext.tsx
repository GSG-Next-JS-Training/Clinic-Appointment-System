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
} from "@clinic/reducers/gridReducer";


export const GridContextValues = (initialState: IGridState) => {
    const [state, dispatch] = useReducer(gridReducer, initialState);

    const Init = useCallback(
        (payload: IActionPayload) => dispatch({type: Reducer_Action_Type.INIT, payload}),
        []
    );

    const SetFilter = useCallback(
        (payload: IActionPayload) => dispatch({type: Reducer_Action_Type.SET_FILTERS, payload}),
        []
    );
    
    const UpdateRows = useCallback(
        (payload: IActionPayload) => dispatch({type: Reducer_Action_Type.UPDATE_ROWS, payload}),
        []
    );
return { Init, state, SetFilter, UpdateRows};
}

type GridContextValuesType = ReturnType<typeof GridContextValues>;

const initialContextValue: GridContextValuesType = {
    state: initialState,
    Init: () => {},
    SetFilter: () => {},
    UpdateRows: () => {}
};

export const GridContext = createContext<GridContextValuesType>(initialContextValue);

export const GridProvider = ({children}: {children: ReactNode}) =>{
    const contextValues = GridContextValues(initialState);
    return(
        <GridContext.Provider value = {contextValues}> 
        {children}
        </GridContext.Provider>
    );
};

