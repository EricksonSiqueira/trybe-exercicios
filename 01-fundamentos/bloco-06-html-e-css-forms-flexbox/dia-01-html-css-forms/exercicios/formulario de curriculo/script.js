const states = document.getElementById('states')

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
creatStateOptions()
