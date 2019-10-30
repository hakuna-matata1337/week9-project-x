import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Login from './Login'
import Register from './Register'
import Header from '../Header'

export default ({ passed }) => {
  return (
    <main className="main-welcome">
      <Redirect to="/" />
      <Header />
      <Switch>
        <Route exact path="/">
          <Login passed={passed} />
        </Route>
        <Route path="/register">
          <Register passed={passed} />
        </Route>
      </Switch>
    </main>
  )
}
