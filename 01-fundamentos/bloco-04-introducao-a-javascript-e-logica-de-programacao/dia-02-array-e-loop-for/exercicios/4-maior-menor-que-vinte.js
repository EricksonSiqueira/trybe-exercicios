let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0

for(let i = 0; i < numbers.length; i++){
  somatorio += numbers[i]
}

let media = somatorio/numbers.length

if(media > 20){
  console.log("Valor MAIOR que 20")
}else{
  console.log("Valor MENOR que 20")
}

console.log("Media: ", media)
