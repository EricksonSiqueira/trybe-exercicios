import React, { Component } from 'react'

class Age extends Component {
  render() { 
    const {value:age , handleChange} = this.props;
    const error = Number(age) < 0 ? 'Idade inválida' : undefined;
    return (
      <label>
        Sua idade:
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
        />
        <span>{(error) ? error : ''}</span>
      </label>
    );
  }
}

export default Age;
