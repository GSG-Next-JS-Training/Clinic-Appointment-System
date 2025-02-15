import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackbarProvider from "./context/SnackbarContext";
import { GridProvider } from "./context/GridContext";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./component/error-boundary";
import { AppointmentsProvider } from "./context/appointmentContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AppointmentsProvider>
          <SnackbarProvider>
            <GridProvider>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </GridProvider>
          </SnackbarProvider>
        </AppointmentsProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
