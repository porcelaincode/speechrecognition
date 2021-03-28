import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function BrowserSupport() {
  return (
    <>
      <div className="BrowserSupport">
        Apologies! This project is currently built on top of Chrome or Chromium
        Browser. We're looking forward to extending support to your favourite
        browsers soon!
      </div>
      <HeaderComponent />
    </>
  );
}

export default BrowserSupport;
