let angulo1 = 60
let angulo2 = 50
let angulo3 = 70

if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
  console.log('Algum dos angulos é invalido. Verifique se eles são maiores do que 0')
}else if((angulo1 + angulo2 + angulo3) === 180 ){
  console.log('Esses ângulos PODEM formar um triângulo')
}else{
  console.log('Esses ângulos NÃO formam triângulo')
}
