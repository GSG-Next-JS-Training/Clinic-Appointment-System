import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackbarProvider from "./context/SnackbarContext";
import { GridProvider } from "./context/GridContext";
import ErrorBoundary from "./component/errorBoundary";
import App from "./App";
import './index.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <SnackbarProvider>
          <GridProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
          </GridProvider>
        </SnackbarProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
