const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProperty = (object, key, value) => object[key] = value;
addProperty(lesson2, 'turno', 'manhã');

const listKeys = object => Object.keys(object);
const objLength = object => listKeys(object).length;
const listValues = object => Object.values(object);
const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
}
const totalStudents = () => {
  const lessons = Object.values(allLessons);
  let cont = 0;
  for(let i = 0; i < lessons.length; i += 1){
    cont += lessons[i].numeroEstudantes;
  }
  return cont;
}
const getValueByNumber = (object, value) => listValues(object)[value];
const verifyPair = (object, key, value) => {
  let bool = false;
  if(listKeys(object).includes(key) && object[key] === value){
    bool = true;
  }
  return bool;
}

const studentsWatchingMath = () => {
  const values = listValues(allLessons);
  let cont = 0;
  for(let i = 0; i < values.length; i += 1){
    if (listValues(values[i]).includes('Matemática')){
      const numeroEstudantes = values[i]['numeroEstudantes'];
      cont += numeroEstudantes;
    }
  }
  return cont;
}
console.log(studentsWatchingMath())
const createReport = (object, teacher) => {
  const keys = listKeys(object);
  const obj = {
    profesor: teacher,
    aulas: [],
    estudantes:  0,
  };
  for(let i = 1; i <= keys.length; i += 1){
    if(listValues(object[`lesson${i}`]).includes(teacher)){
      const materia = object[`lesson${i}`]['materia']
      const numeroEstudantes = object[`lesson${i}`]['numeroEstudantes'];

      obj.aulas.push(materia);
      obj.estudantes += numeroEstudantes;
    }
  }
  return obj;
}
