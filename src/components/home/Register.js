import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Helpers
import { getUsers, userExists } from '../../Helpers'

export default ({ passed: { notices, setNotice } }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: ''
  });

  const onSubmit = e => {
    e.preventDefault();

    if (!userExists(form)) {
      // TODO: bcrypt the password

      const users = getUsers();
      users.push(form);

      localStorage.setItem('daBomb_users', JSON.stringify(users));
      setNotice([...notices, { message: `You registered successfully, you may now login ${form.username}`, type: 'success' }]);
    } else {
      setNotice([...notices, { message: 'This username is already in use', type: 'error' }]);
    }
  }

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="main-form-container">
      <form className="main-form" onSubmit={e => onSubmit(e)}>
        <div style={{ textAlign: 'center', fontSize: 24 }}>Register</div>
        <input type="text" placeholder="Username" value={form.username} onChange={e => onChange(e)} name="username" pattern="[a-zA-Z0-9]{4,10}" required />
        <input type="password" placeholder="Password" value={form.password} onChange={e => onChange(e)} name="password" pattern="[a-zA-Z0-9]{4,10}" required />
        <input type="email" placeholder="E-Mail" value={form.email} onChange={e => onChange(e)} name="email" required />
        <button>Submit</button>
        <Link to="/" style={{ textAlign: 'center' }}>Already have an account?</Link>
      </form>
    </div>
  )
}