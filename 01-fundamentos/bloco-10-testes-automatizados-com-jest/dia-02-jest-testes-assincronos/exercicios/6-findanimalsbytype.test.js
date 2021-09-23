const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];



const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);


const getAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalByName = Animals.find((animal) => animal.name === name);
      if (animalByName) {
        return resolve(animalByName);
      };

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age)

      if(arrayAnimals.length > 0){
        return resolve(arrayAnimals);
      } else {
        return reject(new Error ('Não existem animais com essa idade'));
      }
    }, 100);
  })
);

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByName('Bob').catch(error =>
        expect(error.message).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {

  describe('Quando o animal é encontrado', () => {
    it('Procurando animal com age: 5', () => {
      expect.assertions(1);
      const expected = { name: 'Preguiça', age: 5, type: 'Cat' };

      return findAnimalsByAge(5).then((animals) => {
        expect(animals[0]).toEqual(expected);
      })
    });

    it('Procurando animal com age: 2',() => {
      expect.assertions(1);
      const expected = { name: 'Soneca', age: 2, type: 'Dog' };

      return findAnimalsByAge(2).then((animals) => {
        expect(animals[0]).toEqual(expected);
      });
    });
  });
  describe('Quando o animal não é encontrado', () => {
    it('Procurando por animal com age: 4', () => {
      expect.assertions(1);
      const errorMessage = 'Não existem animais com essa idade';

      return findAnimalsByAge(4).catch((error) => {
        expect(error.message).toBe(errorMessage);
      })
    })
  })
});
