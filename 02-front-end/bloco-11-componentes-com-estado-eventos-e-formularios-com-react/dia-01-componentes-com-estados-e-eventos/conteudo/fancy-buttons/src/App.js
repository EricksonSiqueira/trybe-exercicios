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
  handleClick() {
    this.setState((previousState, _props) => ({
      numeroDeCliques: previousState.numeroDeCliques + 1,
    }))
    console.log(this.state.numeroDeCliques);
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    );

  }
}

export default App;