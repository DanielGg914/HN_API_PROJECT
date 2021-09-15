import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { HeadingProvider } from "./util/context";

ReactDOM.render(
  <React.StrictMode>
    <HeadingProvider>
      <App />
    </HeadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
