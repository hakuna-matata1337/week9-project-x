import React from 'react'

import { getSession, deletePost } from '../../Helpers'
import deleteImage from '../../style/delete.png'

export default ({ passed: { post, posts, setPosts } }) => {
  const session = getSession();

  const deleteOnClick = id => {
    const filteredPosts = posts.filter(post => post.id !== id);
    setPosts(filteredPosts);
    deletePost(id);
  }

  return (
    <div className="main-post">
      <div className="title">
        {post.title}
        {session.username === post.author && <img className="delete" src={deleteImage} alt="delete" onClick={() => deleteOnClick(post.id)} />}
      </div>
      <div className="content">{post.content}</div>
      <div className="info">posted by <span style={{ fontWeight: 500 }}>{post.author}</span> [{post.date}]</div>
    </div>
  )
}
