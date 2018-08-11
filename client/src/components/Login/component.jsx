import React from 'react';
import "./style.scss";

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  handlesLogin() {
    this.props.auth.authenticate();
    this.props.history.push('/');
    console.log(this.props.history)
  }
  
  render() {
    console.log(this.props);
    return (
      <div> 
        Login Page
        <button onClick={ () => this.handlesLogin() }>Login</button>
      </div>
    );
  }
}

export default Login;
