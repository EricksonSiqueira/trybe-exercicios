let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = []
let k = 1
for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i+1] != undefined) numbersMult[i] = numbers[i] * numbers[i + 1]
  else numbersMult[i] = numbers[i] * 2
}

console.log(numbersMult)