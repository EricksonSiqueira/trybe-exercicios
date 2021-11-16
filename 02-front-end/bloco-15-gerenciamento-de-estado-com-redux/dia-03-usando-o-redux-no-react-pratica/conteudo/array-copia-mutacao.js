const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
let copiaTeste = itemPrimario.concat(10);
mutacaoTeste.push(6);
console.log(copiaTeste); // [1, 2, 3, 4, 5, 7]
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]