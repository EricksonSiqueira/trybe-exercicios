const states = document.getElementById('states')
const submitButton = document.getElementById('submit')
const buttonTeste = document.getElementById('teste')

function creatStateOptions() {
  const statesArray = ['Acre', 'ac', 'Alagoas', 'al', 'Amapá', 'ap', 'Amazonas', 'am', 'Bahia', 'ba', 'Ceará', 'ce', 'Espírito Santo', 'es', 'Goiás', 'go', 'Maranhão', 'ma', 'Mato Grosso', 'mt', 'Mato Grosso do Sul', 'ms', 'Minas Gerais', 'mg', 'Pará', 'pa', 'Paraíba', 'pb', 'Paraná', 'pr', 'Pernambuco', 'pe', 'Piauí', 'pi', 'Rio de Janeiro', 'rj', 'Rio Grande do Norte', 'rn', 'Rio Grande do Sul', 'rs', 'Rondônia', 'ro', 'Roraima', 'rr', 'Santa Catarina', 'sc', 'São Paulo', 'sp', 'Sergipe', 'se', 'Tocantins', 'to', 'Distrito Federal', 'df']

  for(let i = 0; i < statesArray.length; i += 2){
    const option = document.createElement('option')
    option.innerText = statesArray[i]
    option.value = statesArray[i+1]
    if(i === 0){
      option.selected = true
    }
    states.appendChild(option)
  }
}
const inputDate = document.getElementById('start-date')
function verifyDay(item, itemText) {
  let boolean = false
  if (item !== NaN && itemText === 2 && item > 0 && item <= 31) {
   boolean = true
  }
  return boolean
}
function verifyMonth(item, itemText) {
  let boolean = false
  if (item !== NaN && itemText === 2 && item > 0 && item <= 12) {
    boolean = true
  }
  return boolean
}

function verifyYear(year, yearText) {
  let boolean = false
  if (year !== NaN && yearText === 4 && year > 0) {
    boolean = true
  }
  return boolean
}
function verifyDate(){
  const valueSplited = inputDate.value.split('/')
  const dayTxtSize = valueSplited[0].length
  const monthTxtSize = valueSplited[1].length
  const yearTxtSize = valueSplited[2].length
  const day = parseInt(valueSplited[0])
  const month = parseInt(valueSplited[1])
  const year = parseInt(valueSplited[2])

  if (verifyDay(day, dayTxtSize) ==! true || verifyMonth(month, monthTxtSize) ==! true || verifyYear(year, yearTxtSize) ==! true){
   window.alert('Tem algo errado com a data. Verifique se esta no estilo dd/mm/aaaa (dia, mês e ano)') 
  }
}
function verifyLength (input, maxLength) {
  const inputValue = input.value
  let boolean = true
  if(inputValue.length > maxLength){
    boolean = false
  }
  return boolean
}
function validateCpfDigit (cpf, multiplicator) {
  let sum = 0
  let howManyLoops = multiplicator - 1
  for (let i = 0; i < howManyLoops; i += 1) {
    sum += parseInt(cpf.slice(i, i + 1)) * multiplicator
    multiplicator -= 1
  }
  let validationDigit = (sum * 10) % 11
  if (validationDigit === 10 || validationDigit === 11) {
    validationDigit = 0
  }
  console.log(validationDigit,parseInt(cpf.slice(9, 10)))

  return validationDigit
}
function validateCPF (cpf) {
  let boolean = false
  let firstValidationDigit = validateCpfDigit(cpf, 10)
  let secondValidationDigit = validateCpfDigit(cpf, 11)

  if (firstValidationDigit === parseInt(cpf.slice(9, 10))){
    boolean = true
  }
  if (secondValidationDigit === parseInt(cpf.slice(10, 11))){
    boolean = true
  }else {
    boolean = false
  }
  
  
  console.log('primeiro', firstValidationDigit, 'sliced', parseInt(cpf.slice(9, 10)))
  console.log('segundo', secondValidationDigit, 'sliced', parseInt(cpf.slice(10, 11)))
  console.log(boolean)
  return boolean
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  const nameInput = document.getElementById('name-input')
  const emailInput = document.getElementById('email-input')
  const cpfInput = document.getElementById('cpf-input').value
  let validationBooleans = []
  
  // validationBooleans.push(verifyLength(nameInput, 40))
  // validationBooleans.push(verifyLength(emailInput, 50))
  // validationBooleans.push(verifyLength(emailInput, 11))
  if (!validateCPF(cpfInput)){
    window.alert('CPF inválido.')
    cpfInput.value = ''
  }else{
    window.alert('CPF válido')
  }
})

buttonTeste.addEventListener('click', verifyLength)

creatStateOptions()
