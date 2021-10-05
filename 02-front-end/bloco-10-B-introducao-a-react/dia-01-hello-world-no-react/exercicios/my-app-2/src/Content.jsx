import React, {Component} from "react";
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function makeContentCard(content) {
  return (
    <div key={content.conteudo} className='card'>
      <p>O conteúdo é: {content.conteudo}</p>
      <p>Status: {content.status}</p>
      <p>Bloco: {content.bloco}</p>
    </div>
  )
}

class Content extends Component {
  render() {
    return (
    <div className='card-container'>
      {conteudos.map(content => makeContentCard(content))}
    </div>
    )
  }
}

export default Content
