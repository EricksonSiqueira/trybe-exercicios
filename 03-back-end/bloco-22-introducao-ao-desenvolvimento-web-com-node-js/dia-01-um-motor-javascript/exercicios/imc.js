const readline = require('readline-sync');

function calcIMC(peso, altura) {
  return peso/ altura ** 2;
}
function getIMCCategory(IMC) {
  if (IMC < 18.5) {
    return 'Abaixo do Peso';
  } else if (IMC < 25) {
    return 'Peso Normal';
  } else if (IMC < 30) {
    return 'Sobrepeso';
  } else if (IMC < 35) {
    return 'Obesidade Grau I';
  } else if (IMC < 40) {
    return 'Obesidade Grau II';
  } else {
    return 'Obesidade Grau III';
  }
}

function getPersonIMC() {
  const peso = readline.questionFloat('Qual o seu peso? ');
  const altura = readline.questionFloat('Qual a sua altura? ');
  const IMC = calcIMC(peso, altura);

  console.log(`Seu IMC é ${IMC.toFixed(2)}`);
  console.log(getIMCCategory(IMC));
  return IMC;
}

module.exports = getPersonIMC;
