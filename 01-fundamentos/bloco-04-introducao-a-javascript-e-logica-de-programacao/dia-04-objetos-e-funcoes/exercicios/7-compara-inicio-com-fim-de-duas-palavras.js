let word = 'trybe'
let end = 'be'

function checkFinal(word, end){
  if(word.slice(-(end.length)) === end){
    return true
  }else{
    return false
  }
}
console.log(checkFinal(word, end))
