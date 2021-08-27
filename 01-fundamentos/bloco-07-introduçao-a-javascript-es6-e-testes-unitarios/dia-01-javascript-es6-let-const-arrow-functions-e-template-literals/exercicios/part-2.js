// 1 - Fatorial

const fatorial = n => {
  let resposta = 1
  if (n !== 0){
    for(let i = n; i > 1 ; i -= 1){
      resposta *= i;
    }
  }
  return resposta;
};

const fatorialRecursivo = n => {
  if(n === 0){
    return 1;
  } else {
    return n * fatorialRecursivo(n - 1);
  }
};

const fatorialRecursivoV2 = (n) => (n === 0) ? 1 : n * fatorialRecursivoV2(n - 1);

// 2 - Maior palavra da frase

const longestWord = (phrase) => {
  const splitedPhrase = phrase.split(' ');
  let maior;
  for(let i = 0; i < splitedPhrase.length; i += 1){
    if(i === 0 || splitedPhrase[i].length > maior.length) maior = splitedPhrase[i];
  }
  return maior;
};
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
