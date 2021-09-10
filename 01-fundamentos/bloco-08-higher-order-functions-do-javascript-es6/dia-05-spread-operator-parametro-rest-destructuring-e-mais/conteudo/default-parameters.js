// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

//forma deselegante

// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome usuário!

//forma elegante

// const greeting = (user = 'user') => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

const multiply = (number = 1, value = 1) => {
  // Escreva aqui a sua função
  return (number * value);
};

console.log(multiply(8));
