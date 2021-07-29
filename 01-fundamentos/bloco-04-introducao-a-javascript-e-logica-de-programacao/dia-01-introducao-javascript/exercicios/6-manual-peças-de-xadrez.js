let peca = 'torre'

switch (peca.toLowerCase()){
  case 'peão':
    console.log("Diagonal e linha reta (1 casa)")
    break;
  case 'bispo':
    console.log('Diagonal')
    break;
  case 'cavalo':
    console.log('Formato de L e pula por cima de outras peças')
    break;
  case 'torre':
    console.log('Linha reta')
    break;
  case 'dama':
    console.log('Diagonal, vertical, horizontal')
    break;
  case 'rei':
    console.log('Diagonal, vertical, horizontal. (1 casa)')
    break;
  default:
    console.log('Algum erro aconteceu. Verifique se o nome da peça está no singular.')
    break;
}