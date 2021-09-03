// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort((a, b) => b - a); // decrescente
// numbers.sort((a, b) => a - b); // crescente
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];


people.sort( (person1 , person2) => person1.age - person2.age); // crescente
people.sort( (person1, person2) => person2.age - person1.age); // decresente
console.log(people);
