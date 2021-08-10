function maxArrayValue(array){
  return Math.max.apply(null, array)
}

function maxArrayValue2(array){
  let max = array[0]
  
  for(let number of array){
    if(number > max) max = number
  }
  return max
}
let array = [1, 20, 35, 40, 1, 3]

console.log(maxArrayValue2(array))