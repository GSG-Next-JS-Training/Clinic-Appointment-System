import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackbarProvider from "./context/SnackbarContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
