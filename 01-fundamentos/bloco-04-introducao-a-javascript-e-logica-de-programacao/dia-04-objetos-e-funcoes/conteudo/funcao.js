//Refazendo exercícios do dia 01 bloco 04, e colocando todos em funções

function soma(a = 0, b = 0){
  return a + b
}
function subtracao(a = 0, b = 0){
  return a - b
}
multiplicacao = (a = 1, b = 1) => a * b

divisao = (a = 1, b = 1) => a / b

function modulo(a = 1, b = 1){
  return a % b
}
console.log(soma(10, 5), subtracao(10, 5), multiplicacao(5, 2), divisao(20, 4), modulo(10, 2))