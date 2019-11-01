import React, { useState, useEffect } from 'react'

import { getPosts } from '../../Helpers'

// Components
import Post from './Post'
import NewPost from './NewPost'

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, [])

  return (
    <div className="feed-container">
      <NewPost passed={{ posts, setPosts }} />
      <div className="feed-posts">
        {posts.map(post => <Post key={post.id} passed={{ post, posts, setPosts }} />)}
      </div>
    </div>
  )
}
