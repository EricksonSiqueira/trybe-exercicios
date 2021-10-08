import React, { Component } from 'react'

class TextArea extends Component {
  render() {
    const {value, handleChange} = this.props;
    const error = value.length > 50 ? 'Maxímo de 50 caracteres': undefined;
    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea 
          name="favoritState"
          value={value} 
          onChange={handleChange} 
        />
        <span>{value.length}</span>
        <span>{error ? error: ''}</span>
      </label>
    );
  }
}

export default TextArea;
