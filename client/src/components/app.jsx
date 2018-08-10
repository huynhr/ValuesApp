import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomeComponent from './home/component.jsx';
import LoginComponent from './Login/component.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: true
    }
  }
  render() {
    let comp;
    if (this.state.user) {
      comp = <Route path="/" component={ HomeComponent } />
    } else { 
      comp = <Route path="/login" component={ LoginComponent }/>
    }
    console.log(comp);
    return (
      <div> { comp } </div>
    )
  }
}

export default App;