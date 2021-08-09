const emergencyDivs = document.querySelectorAll('.emergency-tasks div')
const emergencyH3 = document.querySelectorAll('.emergency-tasks div h3')

for(let i = 0;i < emergencyDivs.length; i += 1){
  emergencyDivs[i].style.background = '#ff9f84'
  emergencyH3[i].style.background = '#a51ff3'
}