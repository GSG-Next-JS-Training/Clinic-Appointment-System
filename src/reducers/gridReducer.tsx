import { GridColDef } from "@mui/x-data-grid/";

export interface IGridState{
    columns: GridColDef [];
    rows: any [];
}

export const initialState: IGridState = {
    columns: [],
    rows: [],
};

export enum Reducer_Action_Type {
    INIT = "Init",
}

export interface IActionPayload extends Partial<IGridState>{}

export interface IAction {
    type: Reducer_Action_Type;
    payload: IActionPayload;
}

export const gridReducer = (state: IGridState, action: IAction): IGridState => {
    switch(action.type){
        case Reducer_Action_Type.INIT: 
            return {...state, ...action.payload}
        default: 
            return state;
    }
};
