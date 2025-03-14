import { StrictMode } from "react";

import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";

// Set the base URL for axios
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true; // Send cookies with every request

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    allVariants: { color: "white" },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-center" />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
