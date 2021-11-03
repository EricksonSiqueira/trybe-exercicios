let randomNumber = require('./service');

describe('Testes do arquivo service.', () => {
  it('Testando retorno da  função randomNumber', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })

  it('Reimplementando randomNumber para receber 2 numeros e retornar sua divisão', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(6, 3)).toBe(2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(6, 3)).not.toBe(2);
  })
})
