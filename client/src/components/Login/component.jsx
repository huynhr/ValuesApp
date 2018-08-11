import React from 'react';
import "./style.scss";

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log(this.props);
    return (
      // <div>
      //   {
      //     this.props.auth ? '' : 'Login Page'
      //   }
      // </div>
      <div>
        Login Page
      </div>
    );
  }
}

export default Login;
