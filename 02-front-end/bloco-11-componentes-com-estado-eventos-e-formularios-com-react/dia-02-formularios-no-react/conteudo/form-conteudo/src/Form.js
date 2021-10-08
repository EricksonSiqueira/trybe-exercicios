import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      favoritState: '',
    }
  }

  handleChange( {target} ) {
    this.setState({favoritState: target.value})
  }
  render(){
    return(
      <div>
        <h1>Meu primeiro formulário usando React</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea name="estadoFavorito" value={this.state.favoritState} onChange={this.handleChange} />
          </label>
          <label>
            Sua idade:
            <input
              type="number"
              name="idade"
            />
          </label>
          <label>
            Vai comparecer?
            <input
              type="checkbox"
              name="vaiComparecer"
            />
          </label>
          Dia que vai comparecer:
          <select>
            <option>08/09</option>
            <option>09/09</option>
            <option>10/09</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Form;
