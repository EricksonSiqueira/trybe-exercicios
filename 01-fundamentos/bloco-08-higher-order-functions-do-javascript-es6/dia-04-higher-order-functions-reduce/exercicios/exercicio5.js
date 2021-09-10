const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const aCont = (howManyA, letter) => {
  return (letter.toLocaleUpperCase() === 'A') ? howManyA + 1 : howManyA;
}
const aQuantity = (aSum, name) => {
  const nameSplited = name.split('');
  const aInName = nameSplited.reduce(aCont, 0);

  return aSum + aInName;
}
function containsA() {
  // escreva seu código aqui
  const aInWords = names.reduce(aQuantity , 0);

  return aInWords;
}
assert.deepStrictEqual(containsA(), 20);