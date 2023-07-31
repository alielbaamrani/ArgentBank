import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { login } from '../../api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.scss'
import '../../utils/reset.scss'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.userLogin)
  const { errorMessage } = useSelector((state) => state.error)
  


  const [email, setEmailValue] = useState('')
  const [password, setPasswordValue] = useState('')

  const submitLogin = async (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  })
  return (
    <div className="login">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In </h1>
          <form onSubmit={submitLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmailValue(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPasswordValue(e.target.value)}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <input type="submit" value="submit" className="sign-in-button"></input>
          </form>
          <p>{errorMessage}</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login
