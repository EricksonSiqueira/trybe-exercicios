const readline = require('readline-sync');

function calcVelMedia (distancia, tempo) {
  return distancia/tempo;
};

function getVelMedia () {
  const distancia = readline.questionInt('Qual a distância percorrida?(m) ');
  const velocidade = readline.questionInt('Qual a velocidade?(s) ');

  const velMedia = calcVelMedia(distancia, velocidade);

  console.log(`A velocidade média é ${velMedia.toFixed(2)} m/s`);
}

module.exports = getVelMedia;