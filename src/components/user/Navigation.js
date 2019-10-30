import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ passed: { setSession } }) => {
  const userLogout = () => {
    setSession(null);
    localStorage.setItem('daBomb_session', '');
  };

  return (
    <nav className="nav-user">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/profile">Profile</Link>
      <a onClick={userLogout}>Logout</a>
    </nav>
  )
}

export default Navigation
