import React, { useState, useEffect } from 'react'

import { getUsers } from '../../Helpers'

// Components

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, [])

  return (
    <div className="feed-container">
      <div className="feed-posts">
        {users.map(user => <User key={user.id} passed={{ user }} />)}
      </div>
    </div>
  )
}

const User = ({ passed: { user } }) => {

  return (
    <div style={{ padding: 15 }}>{user.username}  (<span style={{ color: '#b3b3b3' }}>{user.email}</span>) <div style={{ float: 'right' }}>{user.date}</div></div>
  )
}