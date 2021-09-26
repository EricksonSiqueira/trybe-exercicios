const verifyLetterEnconding  = (letter) => {
  let result = letter;
  const vogals = ['a', 'e', 'i', 'o', 'u'];
  const vogal = vogals.find((vogal) => vogal === letter);
  if(vogal){
    const encodedVogal = vogals.indexOf(vogal) + 1;
    result = encodedVogal;
  }
  return result;
}
const encode = (string) => {
  const splitedString = string.split('');
  const encodedArray = splitedString.map((letter) => verifyLetterEnconding(letter));
  const encodedString = encodedArray.join('');
  return encodedString;
}

const verifyLetterDecoding = (char) => {
  let result = char;
  const encodeNumbers = ['1', '2', '3', '4', '5'];
  const vogals = ['a', 'e', 'i', 'o', 'u'];
  const encodeNumber = encodeNumbers.find((number) => char === number);
  if(encodeNumber){
    const numberVogalIndex = encodeNumber - 1;
    const vogal = vogals[numberVogalIndex];
    result = vogal;
  }
  return result;
}
const decode = (string) => {
  const splitedString = string.split('');
  const decodedArray = splitedString.map((char) => verifyLetterDecoding(char));
  const decodedString = decodedArray.join('');
  return decodedString;
}

module.exports = { decode, encode };