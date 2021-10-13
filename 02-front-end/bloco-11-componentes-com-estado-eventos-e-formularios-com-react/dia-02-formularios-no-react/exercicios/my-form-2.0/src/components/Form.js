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
    const { name, email, cpf, adress, city } = this.state;
    return (
    <form>
      <fieldset>
        <InputText name="name" labelText="Name" value={name} handleChange={this.handleChange}/>
        <InputText name="email" labelText="email" value={email} handleChange={this.handleChange} />
        <InputText name="cpf" labelText="CPF" value={cpf} handleChange={this.handleChange} />
        <InputText name="adress" labelText="Endereço" value={adress} handleChange={this.handleChange} />
        <InputText name="city" labelText="Cidade" value={city} handleChange={this.handleChange} />
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
