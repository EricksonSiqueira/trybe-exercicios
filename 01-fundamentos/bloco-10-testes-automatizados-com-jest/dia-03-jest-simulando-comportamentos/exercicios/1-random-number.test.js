const randomNumber = require('./1-random-number');

describe('Testes da função randomNumberZeroToOneHundred', () => {
  const spiedRandomNumber = jest.spyOn(randomNumber, 'randomNumberZeroToOneHundred');
  it('Função é chamada', () => {
    spiedRandomNumber();
    expect(spiedRandomNumber).toHaveBeenCalled();
    expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
  });
  it('Retorna o valor 10 setado como default', () => {
    spiedRandomNumber.mockReturnValue(10);

    expect(spiedRandomNumber()).toBe(10);
    expect(spiedRandomNumber).toHaveBeenCalledTimes(2);
  });
});
