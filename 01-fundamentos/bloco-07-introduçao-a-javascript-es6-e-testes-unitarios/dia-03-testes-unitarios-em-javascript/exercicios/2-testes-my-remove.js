const assert = require('assert')
const myRemove = (array ,item) => {
  const newArray = [];
  for(let i = 0; i < array.length; i+= 1){
    if(array[i] !== item){
      newArray.push(array[i]);
    }
  }
  return newArray;
};

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Não retornou [1, 2, 4]');
