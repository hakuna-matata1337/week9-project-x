import React from 'react'
import { Link } from 'react-router-dom'

export default ({ passed: { setSession, session } }) => {
  const userLogout = () => {
    setSession({ username: null });
    localStorage.setItem('daBomb_session', '');
  };

  const style = {
    padding: 10,
    textAlign: 'center'
  }

  return (
    <nav className="nav-user">
      <div style={style}>Hello, {session.username}</div>
      <div style={{ height: 1, background: '#484c81' }}></div>
      <Link to="/profile"> <span role="img" aria-label="person">👤</span> Manage Profile</Link>
      <Link to="/"> <span role="img" aria-label="wall">🧱</span> Public Feed</Link>
      <Link to="/users"> <span role="img" aria-label="friends">😍</span> Find new friends</Link>
      <a href="/" onClick={userLogout}> <span role="img" aria-label="an X">❌</span> Logout</a>
    </nav>
  )
}
