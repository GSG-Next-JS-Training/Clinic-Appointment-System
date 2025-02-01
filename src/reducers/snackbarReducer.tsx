import { SnackbarOrigin, AlertColor } from "@mui/material";
import { ReactNode } from "react";

export interface ISnackbarState {
  open: boolean;
  title: string;
  severity: AlertColor;
  variant: "filled" | "outlined" | "standard";
  message: ReactNode;
  anchorOrigin: SnackbarOrigin;
  action: ReactNode;
  autoHideDuration: number;
  icon: ReactNode;
}

export const initialState: ISnackbarState = {
  open: false,
  title: "",
  severity: "success",
  variant: "filled",
  message: "the book added successfully",
  anchorOrigin: { vertical: "top", horizontal: "center" },
  action: null,
  autoHideDuration: 3000,
  icon: null,
};

export enum REDUCER_ACTION_TYPES {
  SHOW_SNACKBAR = "showSnackbar",
  HIDE_SNACKBAR = "hideSnackbar",
}

export interface SnackbarPayload extends Partial<ISnackbarState> {
  message: ReactNode;
}

interface ReducerAction {
  type: REDUCER_ACTION_TYPES;
  payload?: SnackbarPayload;
}

export const reducer = (
  state: ISnackbarState,
  action: ReducerAction
): ISnackbarState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.SHOW_SNACKBAR:
      return {
        ...state,
        open: true,
        ...action.payload,
      };
    case REDUCER_ACTION_TYPES.HIDE_SNACKBAR:
      return { ...state, open: false };
    default:
      return state;
  }
};
