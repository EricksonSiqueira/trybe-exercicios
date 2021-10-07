  import React, {Component} from 'react';

  class Greeting extends Component {
    render() {
      return (<h1>Hello, {this.props.name}</h1>);
    }
  }
  
  // function Greeting(props) {
  //   return (<h1>Hello, {props.name}</h1>);
  // }

  export default Greeting;