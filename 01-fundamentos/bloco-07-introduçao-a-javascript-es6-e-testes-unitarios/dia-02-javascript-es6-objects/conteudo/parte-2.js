// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

// for (const property in coolestTvShow) {
//   console.log(property);
// }

//   console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const printStudent = student => {
  const keys = Object.keys(student);
  for(let i = 0; i < keys.length; i += 1){
    console.log(`${keys[i]} , Nível : ${student[keys[i]]}`);
  }
}
console.log('----Estudante 1----');
printStudent(student1);

console.log('\n----Estudante 2----');
printStudent(student2);
