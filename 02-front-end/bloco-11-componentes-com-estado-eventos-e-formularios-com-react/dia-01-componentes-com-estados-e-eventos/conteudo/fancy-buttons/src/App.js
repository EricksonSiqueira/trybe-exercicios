import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  verifyNumber(num) {
    return (num % 2) === 0 ? 'green': 'red';
  }
  handleClick() {
    this.setState((previousState, _props) => ({
      numeroDeCliques: previousState.numeroDeCliques + 1,
    }))
  }
  render() {
    const {numeroDeCliques} = this.state
    return (
      <button style={{ backgroundColor: this.verifyNumber(numeroDeCliques) }} onClick={this.handleClick}>{numeroDeCliques}</button>
    );

  }
}

export default App;