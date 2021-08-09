const emergencyH3 = document.querySelectorAll('.emergency-tasks div h3')
const emergencySection = document.querySelector('.emergency-tasks')

emergencySection.style.background = '#ff9f84'
for(let i = 0;i < emergencyH3.length; i += 1){
  emergencyH3[i].style.background = '#a51ff3'
}
