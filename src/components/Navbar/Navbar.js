import React from "react";
import logo from "../../assets/argentBankLogo.png";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-item">
        <NavLink to="/login">Sign-in</NavLink>
      </div>
    </nav>
  );
}
