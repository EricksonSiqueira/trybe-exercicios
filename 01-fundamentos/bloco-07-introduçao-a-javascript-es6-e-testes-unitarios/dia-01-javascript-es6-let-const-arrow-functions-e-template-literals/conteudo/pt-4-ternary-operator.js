// A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;
// //          expression                    true                      false
// const trueExpression = (1 + 1 === 2) ? `Realmente 1 + 1 é igual a 2` : `Não vai entrar aqui`
// console.log(trueExpression)

// const falseExpression = (2 + 2 === 3) ? `Não vai entrar aqui` : `Não, ta maluco? 2 + 2 = peixe`
// console.log(falseExpression)

const checkMatureAge = (age) => {
  if (age >= 18){
    return ('Tem idade pra dirigir.')
  } else {
    return ('Não tem idade pra dirigir.')
  }
}
const checkMatureAgeV2 = (age) => age >= 18 ? `Tem idade pra dirigir.` : `Não tem idade pra dirigir.`

const checkFruit = (fruit) => {
  if(fruit === `Maça`){
    return `Fruta vermelha`
  } else if (fruit === `Banana`) {
    return `Fruta amarela`
  } else {
    return `Não sei a cor`
  }
}

const checkFruitV2 = (fruit) => {
  return (fruit === `Banana`) ? `Fruta amarela` : ((fruit === `Maça`) ? `Fruta vermelha` : `Não sei a cor`) // Isto não é uma boa pratica
}
console.log(checkFruitV2('Banana'))
