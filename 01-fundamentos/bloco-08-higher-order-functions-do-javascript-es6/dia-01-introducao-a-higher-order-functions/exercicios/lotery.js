const generateNumberOneToFive = (max, min) => Math.round(Math.random(max) * (max - min) + min);
const lotery = (number) => (number === generateNumberOneToFive(5, 1)) ? `Parabéns você ganhou` : `Tente novamente`;
