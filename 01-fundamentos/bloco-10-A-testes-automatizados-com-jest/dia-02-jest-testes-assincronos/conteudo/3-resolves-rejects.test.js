// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => { // linha alterada
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);

//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }

//       return reject(new Error('Não possui esse tipo de animal.')); // linha alterada
//     }, 100);
//   })
// );

// describe('Testando promise - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', () => {
//       const listDogs = [
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ];
//       return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', () => (
//       expect(findAnimalsByType('Lion'))
//         .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
//     ));
//   });
// });

describe('Jest', () => {
  test('Brincando com expect', () => {
    const expectA = expect(true).toBeTruthy();
    const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
    const expectC = expect(Promise.reject(new Error('ERROR')))
      .rejects.toEqual(new Error('ERROR'));
    console.log('expect', expectA);
    console.log('expect.resolves', expectB);
    console.log('expect.rejects', expectC);
  });
});
