const assert = require('assert');
const sum = (a, b) => {
  if (typeof (a) !== 'number' || typeof b !== 'number') throw new Error('parameters must be numbers');
  return a + b;
}
assert.strictEqual(sum(4, 5), 9, 'A soma de 4 + 5 é 9');
assert.strictEqual(sum(0, 0), 0, 'A soma de 0 + 0 = 0');
