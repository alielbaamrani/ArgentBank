import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import { getUser } from "../../utils/apiHandler";
// import axios from "axios";

import "./Login.scss";
import "../../utils/reset.scss";

function Login() {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <body>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button">
              <NavLink to="/user">Sign In</NavLink>
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Login;
