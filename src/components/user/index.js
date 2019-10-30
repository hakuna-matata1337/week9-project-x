import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Components
import Header from '../Header'
import Navigation from './Navigation'
import Footer from './Footer'

import Home from './Home'
import Profile from './Profile'

export default ({ passed: { setSession } }) => {
  return (
    <main className="main-userarea">
      <Header area='header' />
      <Navigation passed={{ setSession }} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </main>
  )
}
