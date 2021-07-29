let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior
let menor

for(let i = 0; i < numbers.length; i += 1){


  if(i === 0){ // se estiver no primeiro indice do vetor 
    maior = numbers[i]
    menor = numbers[i]
  }else if(numbers[i] > maior){ // se o valor do vetor for maior que a variavel maior
    maior = numbers[i]
  }else if (numbers [i] < menor){ // se o valor do vetor for menor que a variavel menor
    menor = numbers[i]
  }
}
console.log("Maior valor: ", maior, "\nMenor valor: " , menor)
