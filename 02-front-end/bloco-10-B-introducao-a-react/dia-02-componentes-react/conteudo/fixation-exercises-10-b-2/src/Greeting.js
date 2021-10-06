import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Greeting extends Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

Greeting.defaultProps = {
  name: 'Stranger',
  lastName: 'da Silva',
}

export default Greeting;