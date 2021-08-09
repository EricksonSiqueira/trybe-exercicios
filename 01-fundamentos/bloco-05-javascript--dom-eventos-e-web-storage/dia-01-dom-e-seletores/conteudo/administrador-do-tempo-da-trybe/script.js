const emergencyDivs = document.querySelectorAll('.emergency-tasks div')
const emergencyH3 = document.querySelectorAll('.emergency-tasks div h3')
const emergencySection = document.querySelector('.emergency-tasks')

emergencySection.style.background = '#ff9f84'
for(let i = 0;i < emergencyDivs.length; i += 1){
  emergencyDivs[i].style.paddingTop = '10px'
  emergencyH3[i].style.background = '#a51ff3'
  emergencyH3[i].style.marginTop = '0px';
}
