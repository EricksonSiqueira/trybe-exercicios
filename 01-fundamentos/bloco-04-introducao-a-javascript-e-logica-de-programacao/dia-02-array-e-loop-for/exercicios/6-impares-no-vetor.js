let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares =[]

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] % 2 === 1) impares.push(numbers[i])
}

if(impares.length > 0) console.log(impares)
else console.log("Nenhum valor impar")
