import { createContext, ReactElement, ReactNode } from "react";
import { initialState } from "../reducers/snackbarReducer";
import { useCallback, useReducer } from "react";
import {
  ISnackbarState,
  reducer,
  REDUCER_ACTION_TYPES,
  SnackbarPayload,
} from "../reducers/snackbarReducer";

const SnackBarContext = (initialState: ISnackbarState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showSnackbar = useCallback(
    (payload: SnackbarPayload) =>
      dispatch({ type: REDUCER_ACTION_TYPES.SHOW_SNACKBAR, payload }),
    []
  );

  const hideSnackbar = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPES.HIDE_SNACKBAR }),
    []
  );
  return { state, showSnackbar, hideSnackbar };
};

type SnackbarContextValuesType = ReturnType<typeof SnackBarContext>;

const initContextValues: SnackbarContextValuesType = {
  state: initialState,
  hideSnackbar: () => {},
  showSnackbar: () => {},
};

export const SnackbarContext =
  createContext<SnackbarContextValuesType>(initContextValues);

const SnackbarProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const contextValues = SnackBarContext(initialState);
  return (
    <SnackbarContext.Provider value={contextValues}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
