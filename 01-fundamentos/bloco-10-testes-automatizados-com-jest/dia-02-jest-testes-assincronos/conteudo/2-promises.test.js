const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => { // linha alterada
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.')); // linha alterada
    }, 100);
  })
);

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => (
   findAnimalsByType('Dog').then((animalList) => {
     expect(animalList[0].name).toBe('Dorminhoco');
     expect(animalList[1].name).toBe('Soneca');
   })
  ));
});

describe('Quando o tipo do animal não existe', () => {
  test('Retorna erro', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => {
      expect(error.message).toBe('Não possui esse tipo de animal.');
    });
  });
});
