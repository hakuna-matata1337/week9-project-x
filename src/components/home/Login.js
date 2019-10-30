import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import { getUser } from '../../Helpers.js'

export default ({ passed: { notices, setNotice, setSession } }) => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  // TODO setCookies

  const onSubmit = e => {
    e.preventDefault();

    const user = getUser(login);

    if (user) {
      const session = {
        username: login.username,
        date: new Date()
      };

      setSession(session);
      localStorage.setItem('daBomb_session', JSON.stringify(session));

      setNotice([...notices, { message: 'You logged in successfully', type: 'success' }]);
    } else {
      setNotice([...notices, { message: 'Wrong user credentials', type: 'error' }]);
    }
  }

  const onChange = e => setLogin({ ...login, [e.target.name]: e.target.value })

  return (
    <div className="main-form-container">
      <form className="main-form" onSubmit={e => onSubmit(e)}>
        <div style={{ textAlign: 'center', fontSize: 24 }}>Login</div>
        <input type="text" placeholder="Username" value={login.username} onChange={e => onChange(e)} name="username" required />
        <input type="password" placeholder="Password" value={login.password} onChange={e => onChange(e)} name="password" required />
        <button>Submit</button>
        <Link to="/register" style={{ textAlign: 'center' }}>Don't have an account yet?</Link>
      </form>
    </div>
  )
}
