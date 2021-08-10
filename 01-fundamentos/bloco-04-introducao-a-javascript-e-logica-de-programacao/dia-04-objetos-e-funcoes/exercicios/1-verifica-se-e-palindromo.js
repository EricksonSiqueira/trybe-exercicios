function palindromo(word){
  let reverseWord = word.split('').reverse().join('').toLowerCase()
  if(word.toLowerCase() === reverseWord){
    return true
  }else{
    return false
  }

}
console.log(palindromo('arara'))
