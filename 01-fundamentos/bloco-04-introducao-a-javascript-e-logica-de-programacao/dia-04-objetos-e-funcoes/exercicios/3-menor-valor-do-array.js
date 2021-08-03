let array = [1, 5, -3, 10, 20, 50, -20, 100]

function minArrayValue(array){
  let min = array[0]

  for(let i = 0; i < array.length; i += 1){
    if(array[i] < min) min = array[i]
  }
  return min
}

function minArrayValue2(array){
  return Math.min.apply(null, array)
}

console.log(minArrayValue2(array))
