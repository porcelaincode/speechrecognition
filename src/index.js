import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import OnlineStatus from "./OnlineStatus";

var isOnline = navigator.onLine;
console.log(isOnline);

ReactDOM.render(
  <React.StrictMode>{isOnline ? <App /> : <OnlineStatus />}</React.StrictMode>,
  document.getElementById("root")
);
