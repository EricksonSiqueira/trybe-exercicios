let contador = 0
let n = 13

for(let i = 1; i <= 13; i += 1){
  if(n % i === 0){
    contador += 1
  }
  if(contador > 2){
    break
  }
}
if(contador === 2){
  console.log("Número é primo")
}else{
  console.log("Número não é primo")
}
