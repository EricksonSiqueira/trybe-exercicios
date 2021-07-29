let valorDeCusto = 20
let ValorDeVenda = 60

if(valorDeCusto > 0 && ValorDeVenda > 0){
  let impostoSobreOCusto = (valorDeCusto * (20 / 100))
  let valorDeCustoTotal = valorDeCusto + impostoSobreOCusto
  let lucro = ValorDeVenda - valorDeCustoTotal

  console.log(`O lucro ao vender 1000 itens é de ${lucro * 1000}`)

}else{
  console.log('Um dos valores está incorreto. Verifique se todos os valores são maiores do que 0.')
}

