let { randomNumber } = require('./service');

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

  it('Reimplementando randomNumber 2 vezes', () => {
    randomNumber = jest.fn().mockImplementation((number1, number2, number3) => (number1 * number2 * number3) );
    expect(randomNumber(2, 3, 4)).toBe(24);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    randomNumber = jest.fn().mockImplementation((number) => (number * 2) );
    expect(randomNumber(5)).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(4)).toBe(8);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
})
