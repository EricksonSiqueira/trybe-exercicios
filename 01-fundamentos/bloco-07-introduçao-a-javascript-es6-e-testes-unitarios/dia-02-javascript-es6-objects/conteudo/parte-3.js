// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
//   }

// const values = Object.values(coolestTvShow)
// console.log(values)

// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for (skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));

const printListOFSkills = student => {
  const studentKeys = Object.keys(student);
  const studentValues = Object.values(student);

  for(let index = 0; index < studentKeys.length; index += 1){
    console.log(`${studentKeys[index]}, Nível : ${studentValues[index]}`);
  }
};
printListOFSkills(student);
