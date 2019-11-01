import React, { useState } from 'react'
import uuid from 'uuidv4';

import { createPost, getSession } from '../../Helpers'

export default ({ passed: { posts, setPosts } }) => {
  const [form, setForm] = useState({
    title: '',
    content: ''
  })

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const session = getSession();

    const newPost = {
      title: form.title,
      content: form.content,
      id: uuid(),
      date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      time: Date.now(),
      author: session.username
    }

    const newPosts = [...posts];
    newPosts.unshift(newPost);

    setPosts(newPosts);
    createPost(newPost);
    setForm({ title: '', content: '' })
  }

  return (
    <form className="feed-post-form" onSubmit={e => onSubmit(e)}>
      <input type="text" value={form.title} onChange={e => onChange(e)} name="title" placeholder="Post title" pattern="(.){1,50}" required />
      <textarea style={{ height: 100 }} value={form.content} onChange={e => onChange(e)} name="content" placeholder="Post Content" pattern="(.){1,500}" required />
      <button>Submit</button>
    </form>
  )
}