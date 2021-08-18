const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
const techList = document.getElementsByClassName('container')[0].children

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
function addClassTech(event) {
  document.querySelector('.tech').classList.remove('tech')
  event.target.className = 'tech'
}
function addEventListenerToLis(array, functionName) {
  for (let element of array) {
    element.addEventListener('click', functionName)
  }
}
function changeTechText(key){
  let tech = document.querySelector('.tech')
  if(key.code === 'Enter'){
    tech.innerText = input.value
    input.value = ''
  }
}
function openPageInNewTab(){
  window.open('https://github.com/ericksonsiqueira')
}
function changeMyWebPageColorOver(element){
  element.target.style.color = 'orange'
}
function changeMyWebPageColorLeave(element){
  element.target.style.color = 'white'
}

firstLi.addEventListener('dblclick', resetText);
input.addEventListener('keypress', changeTechText)
myWebpage.addEventListener('dblclick', openPageInNewTab)
myWebpage.addEventListener('mouseover', changeMyWebPageColorOver)
myWebpage.addEventListener('mouseleave', changeMyWebPageColorLeave)


addEventListenerToLis(techList, addClassTech)
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.