const fiveSkills = ['Dedicado', 'Analítico', 'Empatia', 'Paciência', 'Input']

const changeXForWord = (phrase, word) => phrase.replace('x', word);

const concatStringWithTalents = () => {
  return `${changeXForWord('Tryber x aqui! Minhas cinco principais habilidades são:', 'Erickson')} 
  ● ${fiveSkills[0]}
  ● ${fiveSkills[1]}
  ● ${fiveSkills[2]}
  ● ${fiveSkills[3]}
  ● ${fiveSkills[4]}
  #goTrybe`
}
console.log(concatStringWithTalents())
