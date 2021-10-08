import React, { Component } from 'react';

class Email extends Component {
  render() { 
    const {value:email, handleChange} = this.props;
    return (
      <label>
        email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default Email;

