import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import User from "./Pages/User/User";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
