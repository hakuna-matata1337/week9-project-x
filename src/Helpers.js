const getUser = ({ username, password }) => {
  const user = getUsers().find(user => user.username === username && user.password === password);
  return user ? user : false;
}

const getUsers = () => {
  const users = localStorage.getItem('daBomb_users');
  return users ? JSON.parse(users) : [];
}

const userExists = ({ username, email }) => {
  const users = getUsers();
  if (users.find(user => user.username.toUpperCase() === username.toUpperCase() || user.email.toUpperCase() === email.toUpperCase())) {
    return true;
  }

  return false;
}

export {
  getUser,
  getUsers,
  userExists
}