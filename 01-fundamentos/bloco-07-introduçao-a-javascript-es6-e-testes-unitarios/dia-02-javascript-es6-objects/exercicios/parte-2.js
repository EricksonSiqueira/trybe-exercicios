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
