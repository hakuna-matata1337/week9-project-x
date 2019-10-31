import React, { useState, useEffect } from 'react'

import { changeUser, getUser } from '../../Helpers'

export default ({ passed: { setNotice, session, setSession } }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: ''
  });

  useEffect(() => {
    const user = getUser(session.username);
    setForm({
      username: user.username,
      password: user.password,
      email: user.email
    });
  }, [session.username])

  const onSubmit = e => {
    e.preventDefault();
    const message = changeUser(form);

    setNotice(message);

    if (form.username !== '') {
      setSession({
        username: form.username,
        date: new Date()
      })
    }
  }

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="main-form-container">
      <form className="main-form" onSubmit={e => onSubmit(e)}>
        <div style={{ textAlign: 'center', fontSize: 24 }}>Change Profile</div>
        <input type="text" placeholder="Username" value={form.username} onChange={e => onChange(e)} name="username" pattern="[a-zA-Z0-9]{4,10}" />
        <input type="password" placeholder="Password" value={form.password} onChange={e => onChange(e)} name="password" pattern="[a-zA-Z0-9]{4,10}" />
        <input type="email" placeholder="E-Mail" value={form.email} onChange={e => onChange(e)} name="email" />
        <button>Submit</button>
      </form>
    </div>
  )
}