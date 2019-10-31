import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import { authorizeUser } from '../../Helpers.js'

export default ({ passed: { setNotice, setSession } }) => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  // TODO setCookies

  const onSubmit = e => {
    e.preventDefault();

    if (authorizeUser(login)) {
      const session = {
        username: login.username,
        date: new Date()
      };

      setSession(session);
      localStorage.setItem('daBomb_session', JSON.stringify(session));

      setNotice({
        title: 'You logged in successfully',
        type: "success"
      })
    } else {
      setNotice({
        title: 'Wrong user credentials, please try again',
        type: "error"
      })
    }
  }

  const onChange = e => setLogin({ ...login, [e.target.name]: e.target.value })

  return (
    <div className="main-form-container">
      <form className="main-form" onSubmit={e => onSubmit(e)}>
        <div style={{ textAlign: 'center', fontSize: 24 }}>Login</div>
        <input type="text" placeholder="Username" value={login.username} onChange={e => onChange(e)} name="username" pattern="[a-zA-Z0-9]{4,10}" required />
        <input type="password" placeholder="Password" value={login.password} onChange={e => onChange(e)} name="password" pattern="[a-zA-Z0-9]{4,10}" required />
        <button>Submit</button>
        <Link to="/register" style={{ textAlign: 'center' }}>Don't have an account yet?</Link>
      </form>
    </div>
  )
}
