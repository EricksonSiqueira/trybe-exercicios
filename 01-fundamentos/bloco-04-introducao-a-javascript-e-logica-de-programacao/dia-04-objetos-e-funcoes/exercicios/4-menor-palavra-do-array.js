let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function smallerWordOnArray(array){
  let maior = array[0]

  for(word of array){
    if(word.length > maior.length) maior = word
  }
  return maior
}
console.log(smallerWordOnArray(array))
