let n = 5

for (let i = 1; i <= n; i += 1) {
  let linha = ' '
  for (let j = 1; j <= n; j += 1) {
    if (n - j >= i) { // n menos o j tem que ser maior do que o i
      linha += ' '
    } else {
      linha += '*'
    }
  }
  console.log(linha)
}

