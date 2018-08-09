import React from 'react';
import './test.scss';
import axios from 'axios';

class Test extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    axios.post('/users/register', {
      hello: 'world'
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Inside of the test</h1>
        <h3>Should be red</h3>
        <p>some jsx here</p>
        <p>adding some more text</p>
        <p>Hello world again!</p>
      </div>
    )
  }
}

export default Test;