import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackbarProvider from "./context/SnackbarContext";
import { GridProvider } from "./context/GridContext";
import './index.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <GridProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        </GridProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
