import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import NotFound from './Pages/NotFound/NotFound'
import Dashboard from './Pages/Dashboard/Dashboard'

const authGuard = (Component) => () => {
  return localStorage.getItem('token') ? <Component /> : <Redirect to='/login' />
}

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/dashboard' render={authGuard(Dashboard)}></Route>
      <Route exact path='/'>
        <Redirect to='/dashboard' />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </Router>
)

export default Routes
