import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { HeadingProvider } from "./util/context";
// import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HeadingProvider>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </HeadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
