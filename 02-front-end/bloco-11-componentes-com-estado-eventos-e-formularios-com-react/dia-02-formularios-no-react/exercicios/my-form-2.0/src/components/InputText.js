import React from 'react'

class InputText extends React.Component {
  constructor(){
    super()
    this.state = {
      charQuant: 0,
    }
  }
  render() { 
    const { labelText } = this.props;
    return (
      <label>
        {labelText}
        <input onChange={this.handleChange} type="text"/>
      </label>
    );
  }
}

export default InputText;
