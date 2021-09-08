// let listaDePessoasAprovadas = [
//   'erickson@gmail.com',
//   'ana@gmail.com',
//   'kvothe@gmail.com'
// ]

// const enviarEmail = objetoEmail => {
//   console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso.`);
// }

// let pessoasAprovadas = listaDePessoasAprovadas.map(email => ({email, nota: 10}));

// pessoasAprovadas.forEach(person => enviarEmail(person));

// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }
// console.log("V1 = ", fullNames);

// const fullNamesV2 = persons.map(person => `${person.firstName} ${person.lastName}`);
// console.log("V2 = ", fullNamesV2);
// const numbers = [1, 2, 3, 4, -5];

// const double = numbers.map(number => number * 2);
// console.log(double);

// const negatives = numbers.map(number => number > 0 ? number * (-1) : number);
// console.log(negatives);

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const productsPrices = (listProducts, listPrices) => listProducts.map((product, index) => ( { [product]: listPrices[index] } ) );

// const listProductsWithPrices = productsPrices(products, prices);
// console.log(listProductsWithPrices);

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

// const paresMenoresQueCinco = [];
// numeros.forEach((numero) => {
//   if (numero < 5 && numero % 2 === 0) {
//     paresMenoresQueCinco.push(numero);
//   }
// });
// console.log(paresMenoresQueCinco); // Retorno: [2, 4]

// const paresMenoresQueCinco2 = numeros.filter(number => (number < 5 && number % 2 === 0));
// console.log(paresMenoresQueCinco2);

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];
const allNameStudents = [];

// com for
for (let index = 0; index < estudantes.length; index += 1) {
  if (estudantes[index].turno === 'Manhã') {
    allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
  }
}

console.log(allNameStudents);

//filter + map
const allNameStudents2 = estudantes.filter( ( estudante => estudante.turno === 'Manhã' ) ).map( estudante => `${estudante.nome} ${estudante.sobrenome}`);
console.log(allNameStudents2);

//com for 
const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].nome === name) {
      return students[index];
    }
  }
};

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.materias.length; index += 1) {
    if (getStudent.materias[index].nota >= 60) {
      report.push(`${getStudent.materias[index].name} Aprovado`);
    } else {
      report.push(`${getStudent.materias[index].name} Reprovado`);
    }
  }
  return report;
};

console.log('V1 :');
console.table(reportStatus('Natalia', estudantes));

//find + map
function reportStatus2 (students, name) {
  const studantInfo = students.find(student => student.nome === name);
  const studanteStats = studantInfo.materias.map(materia => `${materia.name} : ${ ( materia.nota >= 60 ? 'Aprovado' : 'Reprovado' ) }`);

  return studanteStats;
}
console.log('V2 :');
console.table(reportStatus2(estudantes, 'Natalia'));
