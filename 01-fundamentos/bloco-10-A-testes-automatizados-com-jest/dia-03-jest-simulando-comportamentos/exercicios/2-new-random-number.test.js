const randomNumber = require('./1-random-number');

describe('Testes função random number', () => {
  it('Reimplementando para dividir', () => {
    const spiedRandomNumber = jest.spyOn(randomNumber, 'randomNumberZeroToOneHundred');
    spiedRandomNumber.mockImplementationOnce((a, b) => a / b);

    expect(spiedRandomNumber(2, 2)).toBe(1);
    expect(spiedRandomNumber).toHaveBeenCalled();
    expect(spiedRandomNumber).toHaveBeenCalledTimes(1);

    spiedRandomNumber.mockReturnValue(5);
    expect(spiedRandomNumber()).toBe(5);
    expect(spiedRandomNumber).toHaveBeenCalledTimes(2);

    expect(spiedRandomNumber).toHaveBeenCalledWith();
    expect(spiedRandomNumber).toHaveBeenCalledWith(2, 2);

  });
});
