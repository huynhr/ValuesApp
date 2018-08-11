import React from 'react';
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import HomeComponent from './home/component.jsx';
import LoginComponent from './login/component.jsx';

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: true
    }
  }

  render() {

    return (
      <div>
        <Switch>
          <PrivateRoute exact path='/' component={ HomeComponent }/>
          <Route to="/login" render={ () => <LoginComponent auth={fakeAuth.isAuthenticated} />} />
        </Switch>
      </div>
    )
  }
}

export default App;