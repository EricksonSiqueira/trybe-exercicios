import React, { Component } from 'react'

class Form extends Component {
  render() { 
    return (
    <form>
      <fieldset>
        <label>
          Nome
          <input type="text"/>
        </label>
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
        <label for="house">
          Casa
        <input type="radio" name="home" id="house" value="casa"/>
        </label>
        <label for="apart">
          Apartamento
        <input type="radio" name="home" id="apart" value="apartamento"/>
        </label>
      </fieldset>
    </form>
  );
  }
}

export default Form;
