const getUsers = () => {
  const users = localStorage.getItem('daBomb_users');
  return users ? JSON.parse(users) : [];
}

const authorizeUser = ({ username, password }) => {
  const user = getUsers().find(user => user.username === username && user.password === password);
  return user ? user : false;
}

const getUser = (username) => {
  const user = getUsers().find(user => user.username === username);
  return user ? user : [];
}

const userExists = ({ username, email }) => {
  const users = getUsers();
  if (users.find(user => user.username.toUpperCase() === username.toUpperCase() || user.email.toUpperCase() === email.toUpperCase())) {
    return true;
  }

  return false;
}

const getSession = () => {
  const session = localStorage.getItem('daBomb_session');
  return session ? JSON.parse(session) : false;
}

const changeUser = (form) => {
  const session = getSession();
  if (session.username) {
    const filteredForm = {};
    for (let key in form) {
      if (form[key] !== '') {
        filteredForm[key] = form[key]
      }
    }

    const user = { ...getUser(session.username), ...filteredForm };
    const users = getUsers().filter(person => person.id !== user.id);
    users.push(user);
    localStorage.setItem('daBomb_users', JSON.stringify(users));
    localStorage.setItem('daBomb_session', JSON.stringify({
      username: user.username,
      date: new Date()
    }));

    return {
      title: 'Your changes were applied successfully',
      type: 'success'
    }
  }

  return {
    title: 'You need to be authenticated to use this function',
    type: 'error'
  }
}

/**
 * Posts
 */

const getPosts = () => {
  const posts = localStorage.getItem('daBomb_posts');
  return posts ? JSON.parse(posts) : [];
}

const createPost = post => {
  const posts = getPosts();
  posts.unshift(post);
  localStorage.setItem('daBomb_posts', JSON.stringify(posts));
}

const deletePost = id => {
  const posts = getPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  localStorage.setItem('daBomb_posts', JSON.stringify(filteredPosts));
}

export {
  authorizeUser,
  getUser,
  getUsers,
  userExists,
  changeUser,
  getPosts,
  createPost,
  deletePost,
  getSession
}