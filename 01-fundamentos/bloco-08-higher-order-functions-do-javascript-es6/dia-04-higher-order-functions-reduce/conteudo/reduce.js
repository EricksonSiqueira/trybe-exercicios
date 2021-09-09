// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 10 32 47 50 52 47 103
//   return result + number;
// };
// const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 123

// const biggestNumber = numbers.reduce( (biggest, number) => number > biggest ? number : biggest, 100);
// console.log(biggestNumber);

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumEven = numbers2.reduce( (sum, number) => number % 2 === 0 ? sum + number : sum);
console.log(sumEven);
