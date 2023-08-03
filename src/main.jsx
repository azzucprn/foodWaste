import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContext from "../context/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MyContext>
);
