const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random()*101);

const stringToUpperCase = (string) => string.toUpperCase();

const firstChar = (string) => string[0];

const concatTwoStrings = (string1, string2) => `${string1}${string2}`

const fetchDogPicture = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random'

  try {
    const response = await fetch(URL);
    const dogPicture = await response.json();
    return (dogPicture);
  } catch(error) {
    console.log(`Algo deu errado ${error}`);
  }
}

console.log(fetch);

module.exports = { randomNumber, stringToUpperCase, firstChar, concatTwoStrings, fetchDogPicture };
