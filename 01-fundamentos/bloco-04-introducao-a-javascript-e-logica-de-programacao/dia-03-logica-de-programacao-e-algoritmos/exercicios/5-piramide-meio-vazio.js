let n = 7
let middle = rigth = left = Math.floor(n / 2)

for(let i = 0; i < middle; i += 1){
  let line = ''

  for(let j = 0; j < n; j += 1){
    if(j === left || j === rigth){
      line += '*'
    }else{
      line += ' '
    }
  }

  console.log(line)
  rigth += 1
  left -= 1
  if (middle - 1 === i) {
    line = ''
    for(let base = 0; base < n; base += 1){
      line += '*'
    }
    console.log(line)
  }
}
