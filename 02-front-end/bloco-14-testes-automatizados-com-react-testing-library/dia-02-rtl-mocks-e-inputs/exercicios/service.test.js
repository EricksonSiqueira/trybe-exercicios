let { randomNumber, firstChar, concatTwoStrings, fetchDogPicture } = require('./service');
const service = require('./service');
let fetch = require('node-fetch');

const dogPicture = {
  message: 'https://images.dog.ceo/breeds/appenzeller/n02107908_2382.jpg',
  status: 'success'
};

describe('Testes do arquivo service.', () => {
  it('Testando retorno da  função randomNumber', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Reimplementando randomNumber para receber 2 numeros e retornar sua divisão', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(6, 3)).toBe(2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(6, 3)).not.toBe(2);
  });

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
  });

  it('Reimplementando 3 funções do arquivo service', () => {
    const mockStringToUpperCase = jest
      .spyOn(service, 'stringToUpperCase')
      .mockImplementation((string) => string.toLowerCase());

    firstChar = jest.fn().mockImplementation((string) => string[string.length - 1]);
    concatTwoStrings = jest.fn().mockImplementation((string1, string2, string3) => {
      return `${string1}${string2}${string3}`;
    })

    expect(mockStringToUpperCase('TESTE')).toBe('teste');
    expect(firstChar('teste')).toBe('e');
    expect(concatTwoStrings('Erickson',' mestre',' dos testes')).toBe('Erickson mestre dos testes');

    service.stringToUpperCase.mockRestore();
    expect(service.stringToUpperCase('teste')).toBe('TESTE');

  });

  it('Mockando função fetchDogPicture', () => {

    fetch = jest.fn(async () => ({
      json: async () => dogPicture
    }));
    expect(fetchDogPicture()).resolves.toEqual(dogPicture);
  });
});
