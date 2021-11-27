import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import App from "./pages/app";
export default function IRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>111
      </Routes>
    </Router>
  );
}
