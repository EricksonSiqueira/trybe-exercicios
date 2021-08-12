let colorsOptions = document.querySelector('.colors')
let backgroundColor = localStorage.getItem('bgcolor')
let body = document.body

colorsOptions.addEventListener('click', function(e) {
  let element = e.target
  if(element.classList.contains('green')){
    body.style.backgroundColor = 'green'
    localStorage.setItem('bgcolor', 'green')
  } else if (element.classList.contains('blue')){
    body.style.backgroundColor = 'blue'
    localStorage.setItem('bgcolor', 'blue')
  } else if (element.classList.contains('red')){
    body.style.backgroundColor = 'red'
    localStorage.setItem('bgcolor', 'red')
  }
})

function pagePreSets(){
  body.style.backgroundColor = backgroundColor
}
pagePreSets()