const emergencyH3 = document.querySelectorAll('.emergency-tasks div h3')
const emergencySection = document.querySelector('.emergency-tasks')
const noEmergencySection = document.querySelector('.no-emergency-tasks')
const noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3')
const footer = document.getElementById('footer-container')

emergencySection.style.background = '#ff9f84'
noEmergencySection.style.background = '#F9DB5E'
for(let i = 0;i < emergencyH3.length; i += 1){
  emergencyH3[i].style.background = '#a51ff3'
  noEmergencyH3[i].style.background = '#000000'
}
footer.style.background = '#003533'
