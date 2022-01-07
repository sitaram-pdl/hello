import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login/login";
import { AdminDashBoard } from "./Components/AdminDashBoard";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="admin-dashboard" element={<AdminDashBoard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
