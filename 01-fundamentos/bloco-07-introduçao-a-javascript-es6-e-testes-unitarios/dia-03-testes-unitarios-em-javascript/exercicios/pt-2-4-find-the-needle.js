const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, word) => {
  let indexOfWord = -1;
  for(let i = 0; i < words.length; i += 1){
    if(words[i] === word) indexOfWord = i;
  }
  return indexOfWord;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);