import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Components
import Header from '../Header'
import Navigation from './Navigation'
import Footer from './Footer'

import Feed from './Feed'
import Profile from './Profile'
import Users from './Users'

export default ({ passed }) => {
  return (
    <main className="main-userarea">
      <Header area='header' />
      <Navigation passed={passed} />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/profile">
          <Profile passed={passed} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
      <Footer />
    </main>
  )
}
