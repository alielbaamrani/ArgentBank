import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import { postLogin } from '../../api/apiSlice'

// import axios from "axios";

import './Login.scss'
import '../../utils/reset.scss'
import axios from 'axios'

function Login() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const test = async (e) => {
    e.preventDefault()
    postLogin(emailValue, passwordValue)
  }

  return (
    <div className='login'>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In {emailValue}</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button onClick={test} className="sign-in-button">
              sign-In
              {/* <NavLink to="/user">Sign In</NavLink> */}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login
