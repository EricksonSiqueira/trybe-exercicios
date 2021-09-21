const makeRandomNumberArr = (arrayLength, max, min) => {
  let numberArr = []
  for(let i = 0; i < arrayLength; i += 1){
    numberArr.push(randomNumber(max, min));
  }
  return numberArr;
}

const randomNumber = (max, min) => Math.round(Math.random() *(max - min) + min);

const squareArr = (numberArr) => numberArr.map((number) => (number * number));

const sumArr = (numArr) => numArr.reduce((acc, number) => acc + number);

const promise = new Promise ((resolve, rejected) => {
  const randomArr = makeRandomNumberArr(10, 1, 50);
  const squaredArr = squareArr(randomArr);
  const squaredArrSum = sumArr(squaredArr);

  if(squaredArrSum < 8000) {
    return resolve([(squaredArrSum / 2), (squaredArrSum / 3), (squaredArrSum / 5), (squaredArrSum / 10)]);
  }
  rejected(console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

})
  .then(arr => arr)
  .then(sumArr)
  .then(arrSum => console.log(arrSum))
  .catch();