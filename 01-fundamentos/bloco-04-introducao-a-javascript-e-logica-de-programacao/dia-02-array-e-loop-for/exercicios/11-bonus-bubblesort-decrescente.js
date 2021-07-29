let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let k = 1
for(let i = 0; i < numbers.length - 1; i += 1){
  for(let j = 0; j < numbers.length - k; j += 1){
    if(numbers[j] < numbers[j + 1]){
      aux = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = aux
    }
  }
  k += 1
}

console.log(numbers)