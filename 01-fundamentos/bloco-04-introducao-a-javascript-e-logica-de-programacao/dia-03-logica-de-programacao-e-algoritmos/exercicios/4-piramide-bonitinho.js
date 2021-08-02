let n = 5
let middle = Math.floor(n / 2)
let left = right = middle

for (let i = 0; i <= middle; i += 1) {
  let linha = ''

  for (let j = 0; j < n; j += 1) {
    if (j > right || j < left) { // essa parte peguei ideia do gabarito do course
    } else {
      linha += '*'
    }
  }
  console.log(linha, right, left)
  right += 1
  left -= 1
}
