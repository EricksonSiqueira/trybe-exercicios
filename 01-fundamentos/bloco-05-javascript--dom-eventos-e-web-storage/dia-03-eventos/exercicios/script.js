function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const daysList = document.querySelector('#days')
const buttonsContainer = document.querySelector('.buttons-container')
const buttonHolidays = createButton('Feriados', 'btn-holiday')
const buttonFriday = createButton('Sexta-feira', 'btn-friday')

function checkFriday(dayText){
  let fridays = ['4', '11', '18', '25']
  let boolean = false

  for(friday of fridays){
    if(friday === dayText){
      boolean = true
    }
  }
  return boolean
}
function checkHoliday(dayText){
  let holidays = ['24', '25', '31']
  let boolean = false
  for(let day of holidays){
    if(day === dayText){
      boolean = true
    }
  }
  return boolean
}
function creatDaysLi(numberOfDays){
  for(let i = 0; i < numberOfDays; i += 1){
    let day = document.createElement('li')
    day.innerText = i+1
    day.classList.add('day')
    
    if(checkHoliday(day.innerText)){
      day.classList.add('holiday', 'normal')
    }
    if(checkFriday(day.innerText)){
      day.classList.add('friday', 'standard')
    }
    daysList.appendChild(day)
  }

}

function createButton(buttonText, buttonId){
  let button = document.createElement('button')
  button.innerText = buttonText
  button.id = buttonId
  return button
}

function changeHolidaysBackgroundColor(){
  let holidays = document.getElementsByClassName('holiday')

  for(element of holidays){
    if(element.classList.contains('normal')){
      element.style.background = '#EF9A81'
      element.classList.remove('normal')
      element.classList.add('colored')
    }else{
      element.style.background = 'rgb(238,238,238)'
      element.classList.remove('colored')
      element.classList.add('normal')
    }
  }
}

function changeFridayText(){
  let fridays = document.getElementsByClassName('friday')
  let fridaysValue = ['4', '11', '18', '25']

  for(let i = 0; i < fridays.length; i += 1){
    if(fridays[i].classList.contains('standard')){
      fridays[i].innerText = 'sextou!'
      fridays[i].classList.remove('standard')
      fridays[i].classList.add('modified')
    }else{
      fridays[i].innerText = fridaysValue[i]
      fridays[i].classList.remove('modified')
      fridays[i].classList.add('standard')
    }
  }
}

creatDaysLi(31)

buttonsContainer.appendChild(buttonHolidays)

buttonHolidays.addEventListener('click', changeHolidaysBackgroundColor)

buttonsContainer.appendChild(buttonFriday)

buttonFriday.addEventListener('click', changeFridayText)