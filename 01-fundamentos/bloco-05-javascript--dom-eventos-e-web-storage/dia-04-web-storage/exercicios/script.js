let colorsOptions = document.querySelector('.bg-colors')
let textColorOptions = document.querySelector('.text-colors')
let fontSizeOptions = document.querySelector('.font-size')
let lineSpacingOptions = document.querySelector('.line-spacing ')
let fontFamilyOptions = document.querySelector('.font-family ')
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
fontSizeOptions.addEventListener('click',function (e){
  let element = e.target
  let fontSizes = [15, 20, 30]
  let fontClasses = ['small', 'medium', 'big']

  for(let i = 0; i < fontSizes.length; i += 1){
    if(element.classList.contains(fontClasses[i])){
      body.style.fontSize = fontSizes[i] + 'px'
      localStorage.setItem('fontSize', fontSizes[i])
    }
  }

})
lineSpacingOptions.addEventListener('click', function (e) {
  let element = e.target
  let fontSizes = [18, 25]
  let fontClasses = ['medium', 'big']

  for (let i = 0; i < fontSizes.length; i += 1) {
    if (element.classList.contains(fontClasses[i])) {
      body.style.lineHeight = fontSizes[i] + 'px'
      localStorage.setItem('fontSize', fontSizes[i])
    }
  }

})
fontFamilyOptions.addEventListener('click', function (e) {
  let element = e.target
  let fontFamilys = ['monospace', 'Arial']
  let fontClasses = ['monospace', 'arial']

  for (let i = 0; i < fontFamilys.length; i += 1) {
    if (element.classList.contains(fontClasses[i])) {
      body.style.fontFamily= fontFamilys[i]
      localStorage.setItem('fontFamily', fontFamilys[i])
    }
  }

})

function pagePreSets(){
  let backgroundColor = localStorage.getItem('bgcolor')
  let textColor = localStorage.getItem('textColor')

  body.style.backgroundColor = backgroundColor
  body.style.color = textColor
}
pagePreSets()