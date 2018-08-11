import React from 'react';
import createHistory from "history/createBrowserHistory"
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'


import HomeComponent from './home/component.jsx';
import LoginComponent from './login/component.jsx';
import TestComponent from './test/component.jsx'

const history = createHistory();

const fakeAuth = {
  isAuthenticated: false,
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

  signOut() {
    fakeAuth.signout();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/' component={ HomeComponent }/>
            <PrivateRoute exact path='/test' component={ TestComponent }/>
            <Route exact path='/login' render={ (props) => <LoginComponent auth={fakeAuth} {...props}/>} />
          </Switch>
        </BrowserRouter>
        <button onClick={() => this.signOut()}>Logout</button>
      </div>
    )
  }
}

export default App;