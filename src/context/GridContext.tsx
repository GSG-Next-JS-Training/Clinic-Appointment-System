import { createContext, ReactNode, useCallback, useReducer } from "react";
import {
  gridReducer,
  IActionPayload,
  IGridState,
  initialState,
  Reducer_Action_Type,
} from "@clinic/reducers/gridReducer";
import { updateAppointmentInLocalStorage } from "@clinic/utils/local-storage";
import useAppointments from "@clinic/hooks/useAppointments";

export const GridContextValues = (initialState: IGridState) => {
  const [state, dispatch] = useReducer(gridReducer, initialState);
  const {updateAppointments}=useAppointments()

  const init = useCallback(
    (payload: IActionPayload) =>
      dispatch({ type: Reducer_Action_Type.INIT, payload }),
    []
  );

  const setFilter = useCallback(
    (payload: IActionPayload) =>
      dispatch({ type: Reducer_Action_Type.SET_FILTERS, payload }),
    []
  );

  const updateRows = useCallback((payload: IActionPayload) => {
    dispatch({ type: Reducer_Action_Type.UPDATE_ROWS, payload });
    updateAppointmentInLocalStorage(payload.rows);
    updateAppointments(payload.rows)
  }, []);
  return { init, state, setFilter, updateRows };
};

type GridContextValuesType = ReturnType<typeof GridContextValues>;

const initialContextValue: GridContextValuesType = {
  state: initialState,
  init: () => {},
  setFilter: () => {},
  updateRows: () => {},
};

export const GridContext =
  createContext<GridContextValuesType>(initialContextValue);

export const GridProvider = ({ children }: { children: ReactNode }) => {
  const contextValues = GridContextValues(initialState);
  return (
    <GridContext.Provider value={contextValues}>
      {children}
    </GridContext.Provider>
  );
};
