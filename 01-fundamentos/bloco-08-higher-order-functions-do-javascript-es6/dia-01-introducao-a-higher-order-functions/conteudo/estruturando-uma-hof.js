// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0 && number !== 0) {
//     console.log(number, 'is even');
//   }
// }

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven);
// repeat(3, isOdd);

// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(numberGenerator());

const wakeup = () => `Acordando!!`;
const breakfast = () => `Bora tomar café`;
const sleeping = () => `Partiu dormir!!`;
const doingThings = (func) => console.log(func());

doingThings(sleeping);
