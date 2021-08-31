const assert = require('assert');

const greetPeople = (people) => {
  const greetings = [];
  for (const person of people) {
    const greeting = `Hello ${person}`
    greetings.push(greeting);
  }
  return greetings;
};


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
