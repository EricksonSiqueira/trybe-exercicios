const readline = require('readline-sync');

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const sorteio = () => {
  const numeroSorteado = randomNumber(1, 10);
  const numeroDigitado = readline.questionInt('Digite um número entre 1 e 10: ');

  if (numeroSorteado === numeroDigitado) {
    console.log('Você acertou!');
  } else {
    console.log(`Você errou! O número sorteado foi ${numeroSorteado}`);
  }
};

module.exports = sorteio;
