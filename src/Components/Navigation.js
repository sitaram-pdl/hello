import React, { useState, useEffect } from "react";
import "./Navigation.css";
import PNGLogo from "../images/PNG-logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="nav-div">
        <div className="png-logo">
          <img src={PNGLogo}></img>
          <div className="logo-info">
            <p>
              Papua New Guniea
              <br></br>{" "}
              <span className="logo-info1">Eastern Highland Province</span>
            </p>
          </div>
        </div>
        <div className="png-heading">
          {window.location.pathname.split("/")[1] === "admin-dashboard" ? (
            <h1>COVID-19 ADMIN DASHBOARD</h1>
          ) : (
            <h1>COVID-19 DASHBOARD</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
