// function sum(number1, number2) {
//   return number1 + number2;
// }

// const sumVariable = sum;

// console.log(sumVariable(3, 4));
// //  [Function: sum]

// const sum2 = (number1, number2) => {
//   return number1 + number2;
// };

// const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//   console.log(callback());
// }

// printGreeting(sayHello);

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15);
console.log(initialSum(5))
console.log(initialSum(5));