let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0

for(let i = 0; i < numbers.length; i += 1){
  somatorio += numbers[i]
}

let media = somatorio/numbers.length
console.log(media)
