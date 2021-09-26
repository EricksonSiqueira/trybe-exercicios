const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

getUserName(3).then((user) => console.log(user));

describe('Testes da função getUserName',() => {
  it('Caso o usuário de id 1 exista', () => {
    expect.assertions(1);
    return getUserName(1).then((userName) => {
      expect(userName).toBe('Mark');
    });
  });
  it('Caso o usuário de id 2 exista', () => {
    expect.assertions(1);

    return getUserName(2).then((userName) => {
      expect(userName).toBe('Paul');
    })
  })
  it('Caso tente acessar um usuário que não exista lance erro', () => {
    expect.assertions(1);

    return getUserName(3).catch((error) => {
      expect(error.message).toBe(`User with 3 not found.`)
    })
  })
});
