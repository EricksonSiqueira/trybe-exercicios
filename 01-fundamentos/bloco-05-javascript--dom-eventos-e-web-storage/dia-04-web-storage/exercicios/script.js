let colorsOptions = document.querySelector('.bg-colors')
let textColorOptions = document.querySelector('.text-colors')
let backgroundColor = localStorage.getItem('bgcolor')
let body = document.body

colorsOptions.addEventListener('click', function(e) {
  let element = e.target
  let colors = ['green', 'blue', 'red']
  for(color of colors){
    if(element.classList.contains(color)){
      body.style.backgroundColor = color
      localStorage.setItem('bgcolor', color)
    }
  }
})
textColorOptions.addEventListener('click', function(e){
  let element = e.target
  let colors = ['pink', 'purple', 'grey']
  for(color of colors){
    if(element.classList.contains(color)){
      body.style.color = color
      localStorage.setItem('textColor', color)
    }
  }
})

function pagePreSets(){
  body.style.backgroundColor = backgroundColor
}
pagePreSets()