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
      day.classList.add('holiday')
    }
    if(checkFriday(day.innerText)){
      day.classList.add('friday')
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

creatDaysLi(31)

buttonsContainer.appendChild(buttonHolidays)
