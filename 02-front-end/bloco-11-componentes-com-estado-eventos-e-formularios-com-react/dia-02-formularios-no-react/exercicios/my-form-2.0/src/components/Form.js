import React, { Component } from 'react'
import InputText from './InputText';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      home: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( {target} ) {
    const { name, value } = target;
    this.setState({[name]: value})
  }
  render() { 
    const { name } = this.state;
    return (
    <form>
      <fieldset>
          <InputText name="name" labelText="Name" value={name} handleChange={this.handleChange}/>
        <label>
          Email
          <input type="email" name="email" id="email"/>
        </label>
        <label>
          CPF
          <input type="text"/>
        </label>
        <label>
          Endereço
          <input type="text"/>
        </label>
        <label>
          Cidade
          <input type="text"/>
        </label>
        <label htmlFor="house">
          Casa
        <input type="radio" name="home" id="house" value="casa"/>
        </label>
        <label htmlFor="apart">
          Apartamento
        <input type="radio" name="home" id="apart" value="apartamento"/>
        </label>
      </fieldset>
    </form>
  );
  }
}

export default Form;
