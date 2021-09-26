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

describe('Testes para a função getUserName', () => {
  it('Caso o usuário de id 1 exista', async () => {
    expect.assertions(1);
    const user = await getUserName(1);
    expect(user).toBe('Mark');
  });
  it('Caso o usuário de id 2 exista', async () => {
    expect.assertions(1);
    const user = await getUserName(2);
    expect(user).toBe('Paul');
  })
  it('Caso o usuário não exista jogue error', async () => {
    try {
      await getUserName(3);
    } catch(error) {
      expect(error).toEqual(new Error(`User with 3 not found.`))
    }
  })
});
