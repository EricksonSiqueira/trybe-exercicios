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
console.log(listValues(lesson1));
