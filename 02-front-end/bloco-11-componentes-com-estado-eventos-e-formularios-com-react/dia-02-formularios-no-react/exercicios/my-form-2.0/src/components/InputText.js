import React from 'react'

class InputText extends React.Component {
  constructor(){
    super()
    this.state = {
      charQuant: 0,
    }
  }
  render() { 
    const { labelText, name, handleChange, value:nameValue } = this.props;
    return (
      <label>
        {labelText}
        <input onChange={handleChange} type="text" name={name} value={nameValue}/>
      </label>
    );
  }
}

export default InputText;
