import { GridColDef } from "@mui/x-data-grid";

export interface IGridState{
    columns: GridColDef [];
    rows: any [];
    filters: {
        name: string,
        status: string,
    };
}

export const initialState: IGridState = {
    columns: [],
    rows: [],
    filters: {
        name: "",
        status: "All",
    },
};

export enum Reducer_Action_Type {
    INIT = "Init",
    SET_FILTERS = "SetFilters",
    UPDATE_ROWS = "UpdateRows",
}

export interface IActionPayload extends Partial<IGridState>{}

export interface IAction {
    type: Reducer_Action_Type;
    payload: IActionPayload;
}

export const gridReducer = (state: IGridState, action: IAction): IGridState => {
    switch(action.type){
        case Reducer_Action_Type.INIT: 
            return {...state, ...action.payload};
        case Reducer_Action_Type.SET_FILTERS:
            return {...state, filters:{...state.filters, ...action.payload.filters}};
        case Reducer_Action_Type.UPDATE_ROWS:
            return {...state, rows: action.payload.rows || [] as any []};
        default: 
            return state;
    }
};
