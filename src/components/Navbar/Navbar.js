import React from 'react'
import logo from '../../assets/argentBankLogo.png'
import './navbar.scss'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../api/apiSlice'
// import { selectCurrentToken, logOut } from '../../features/authSlice'


export default function Navbar() {
  const navigate = useNavigate
  const { token } = useSelector((state) => state.userLogin)
  const { firstName } = useSelector((state) => state.userProfile)

  const dispatch = useDispatch

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')  }

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link onClick={logoutHandler} className="main-nav-item" to={'/'}> 
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}
