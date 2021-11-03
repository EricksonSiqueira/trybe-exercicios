let randomNumber = require('./service');

describe('Testes do arquivo service.', () => {
  it('Testando retorno da  função randomNumber', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })
})
