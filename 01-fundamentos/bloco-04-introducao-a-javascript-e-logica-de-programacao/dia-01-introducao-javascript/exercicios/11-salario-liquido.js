let salario = 3000

if (salario <= 0){
  console.log('Valor inválido. Digite maior do que 0.')
}else{
  let inss
  let ir

  if(salario > 5189.82) inss = 570.88
  else if(salario >= 2594.93) inss = salario * (11 / 100)
  else if(salario >= 1556.95) inss = salario * (9 / 100)
  else if(salario < 1556.94) inss = salario * (8 / 100)

  let salarioDeduziInss = salario - inss

  if(salarioDeduziInss >= 4664.68) ir = (salarioDeduziInss * (27.5 / 100)) - 869.36
  else if(salarioDeduziInss >= 3751.06) ir = (salarioDeduziInss * (22.5 / 100)) - 636.13
  else if(salarioDeduziInss >= 2826.66) ir = (salarioDeduziInss * (15 / 100)) - 354.80
  else if(salarioDeduziInss >= 1903.99) ir = (salarioDeduziInss * (7.5 / 100)) - 142.80
  else ir = 0

  let salarioLiquido = salarioDeduziInss - ir

  console.log(`Seu salário bruto é de R$${salario.toFixed(2).replace('.', ',')} => líquido R$${salarioLiquido.toFixed(2).replace('.', ',')}`)
}