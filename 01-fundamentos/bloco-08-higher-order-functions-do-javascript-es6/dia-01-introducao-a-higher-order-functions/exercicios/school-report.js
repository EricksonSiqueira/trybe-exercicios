const schoolReport = (template, answers, callback) => {
  let totalPoints = 0;
  for(let i = 0; i < template.length; i += 1){
    totalPoints += callback(template[i], answers[i]);
  }
  return totalPoints;
}
const checkAnswers = (rightAnswers, answer) => {
  let points = -(0.5);
  if (answer === 'N.A') points = 0;
  else if (rightAnswers === answer) points = 1;

  return points;
};
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(schoolReport(rightAnswers, studentAnswers, checkAnswers));