import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import App from "./pages/app";
import Detail from "./pages/detail";
import NoMatch from "./pages/404";
export default function IRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}>
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route exact path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
}
