import React, { Component } from 'react';
import Age from './Age';
import Email from './Email';
import TextArea from './TextArea';

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      favoritState: '',
      email: '',
      age: 0,
      willCome: false,
      day: '08/09',
      file: '',
    }

  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  render() {
    const { favoritState, email, age, willCome, day } = this.state;
    return (
      <div>
        <h1>Meu primeiro formulário usando React</h1>
        <form className="form">
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <TextArea name="favoritState" value={favoritState} handleChange={this.handleChange} />
          <fieldset>
            <legend>Informações do usuário</legend>
            <Email name="email" value={email} handleChange={this.handleChange} />
            <Age name="age" value={age} handleChange={this.handleChange} />
          </fieldset>
          <label>
            Vai comparecer?
            <input
              type="checkbox"
              name="willCome"
              value={willCome}
              onChange={this.handleChange}
            />
          </label>
          Dia que vai comparecer:
          <select name="day" value={day} onChange={this.handleChange}>
            <option value="08/09">08/09</option>
            <option value="09/09">09/09</option>
            <option value="10/09">10/09</option>
          </select>
          <label>
            Sua foto:
            <input type="file" ref={this.fileInput} />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
