const randomNumber = () => Math.floor(Math.random()*101);

const stringToUpperCase = (string) => string.toUpperCase();

const firstChar = (string) => string[0];

const concatTwoStrings = (string1, string2) => `${string1}${string2}`

module.exports = { randomNumber, stringToUpperCase, firstChar, concatTwoStrings };
