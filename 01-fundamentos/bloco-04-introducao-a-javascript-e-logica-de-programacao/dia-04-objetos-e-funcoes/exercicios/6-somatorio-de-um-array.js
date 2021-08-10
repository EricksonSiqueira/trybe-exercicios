let n = 5

function sumOfANumber(number){
  let sum = 0
  for(let i = 1; i <= number; i+= 1){
    sum += i
  }
  return sum
}
console.log(sumOfANumber(n))
