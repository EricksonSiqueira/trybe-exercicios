const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  const lengthsArray = [];

  for(let i = 0; i < words.length; i += 1){
    lengthsArray.push(words[i].length);
  }
  return lengthsArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);