import React from 'react'

import { getSession } from '../../Helpers'
import deleteImage from '../../style/delete.png'

export default ({ passed: { post } }) => {
  const session = getSession();

  return (
    <div className="main-post">
      <div className="title">
        {post.title}
        {session.username === post.author && <img className="delete" src={deleteImage} alt="delete" />}
      </div>
      <div className="content">{post.content}</div>
      <div className="info">posted by <span style={{ fontWeight: 500 }}>{post.author}</span> [{post.date}]</div>
    </div>
  )
}
