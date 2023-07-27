import React, { useEffect, useState } from 'react'

import Account from '../../components/Account/Account'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './profile.scss'
import { updateProfile } from '../../api/apiSlice'

function Profile() {
  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)
  const { token } = useSelector((state) => state.userLogin)

  const [newFirstname, setNewFirstname] = useState()
  const [newLastname, setNewLastname] = useState()
  const [editButton, setEditButton] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((changeName) => !changeName)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, newFirstname, newLastname))
    setEditButton((changeName) => !changeName)
  }

  useEffect(() => {
    if (!token) navigate('/login')
  })
  return (
    <div className="profile">
      <main className="main bg-dark">
        {!editButton ? (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstName + ' ' + lastName} !
            </h1>
            <button onClick={editNameButton} className="edit-button">
              Edit Name
            </button>
          </div>
        ) : (
          <div className="header">
            <h1>Welcome back</h1>
            <form className="editNameContent" onSubmit={submitHandler}>
              <div className="editNameInputs">
                <input
                  type="text"
                  placeholder={firstName}
                  onChange={(e) => setNewFirstname(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder={lastName}
                  onChange={(e) => setNewLastname(e.target.value)}
                  required
                />
              </div>
              <div className="editNameButtons">
                <button className="save-button" type="submit">
                  Save
                </button>
                <button className="cancel-button" onClick={editNameButton}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  )
}

export default Profile
