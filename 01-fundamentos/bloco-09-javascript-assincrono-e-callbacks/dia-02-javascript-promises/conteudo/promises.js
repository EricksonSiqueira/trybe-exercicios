// const promise = new Promise ((resolved, rejected) => {
//   const number = Math.round(Math.random() * 11);

//   if(number <= 5){
//     return rejected(console.log(`Que fracasso ='( , nosso número foi ${number}`));
//   }
//   return resolved(console.log(`Oloooooooooco que sucesso hein =D?! Nosso número foi ${number}`));
// });
const sendLog = msg => console.log(msg);
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(`Que triste, falhamos =( Nosso número foi ${number}`);
  }
  resolve(number);
})
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(sendLog)
  .catch(sendLog);
