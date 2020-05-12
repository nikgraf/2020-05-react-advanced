import "normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.unstable_ConcurrentMode>
    <App />
  </React.unstable_ConcurrentMode>,
  document.getElementById("root")
);
