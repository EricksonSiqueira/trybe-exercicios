const readline = require('readline-sync');

const sorteio = require('./sorteio');
const velocidade = require('./velocidade');
const imc = require('./imc');

function chooseModule() {
  const answer = readline.question('Escolha um módulo: ');
  switch (answer) {
    case 'sorteio':
      sorteio();
      break;
    case 'velocidade':
      velocidade();
      break;
    case 'imc':
      imc();
      break;
    default:
      console.log('Opção inválida');
      chooseModule();
      break;
  }
}

chooseModule();
