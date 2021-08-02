let fruits = [3, 4, 10, 1, 12]
let somatorio = 0

for(let number of fruits){
  somatorio += number
}
if(somatorio > 15){
  console.log(somatorio)
}else if(somatorio < 16){
  console.log("valor menor que 16")
}
