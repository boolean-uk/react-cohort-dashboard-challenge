import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CohortAppProvider } from "./context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CohortAppProvider>
        <App />
      </CohortAppProvider>
    </BrowserRouter>
  </StrictMode>
);
