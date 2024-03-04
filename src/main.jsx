import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          "header-bg": [
            "#000046",
            "#000046",
            "#000046",
            "#000046",
            "#000046",
            "#000046",
            "#000046",
            "#000046",
            "#000046",
            "#000046",
          ],
          "form-input-bg": [
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
            "#e6ebf5",
          ],
          "button-hover": [
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
            "#64dc78",
          ],
          "post-title": [
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
            "#64648c",
          ],
          "body-bg": [
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
            "#F0F5FA",
          ],
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
