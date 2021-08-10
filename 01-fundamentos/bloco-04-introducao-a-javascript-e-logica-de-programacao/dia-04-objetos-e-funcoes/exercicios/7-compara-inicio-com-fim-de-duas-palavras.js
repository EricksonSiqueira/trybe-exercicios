let word = 'trybe'
let end = 'be'

function checkFinal(word, end){
  let reverseSlice = -(end.length)
  return word.slice(reverseSlice) === end
}
console.log(checkFinal(word, end))
