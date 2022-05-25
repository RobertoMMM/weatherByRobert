import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./Main";
import { ThemeProvider } from "./store/WheatherProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
