const sum = require('./exercicio1');

describe('Funçao que soma 2 numeros', () => {
  it('Ao passar 4 e 5 como parametros, espera 9 como resultado', () => {
    const expected = 9;
    expect(expected).toEqual(sum(4, 5));
  });
  it('Ao passar 0 e 0 como parametros, espera 0 como resultado', () => {
    const expected = 0;
    expect(sum(0, 0)).toEqual(expected);
  });
  it('Ao passar 4 e "5" espera que erro seja lançado', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Ao passar 4 e "5" espera que erro seja lançado', () => {
    const expectedErrorMessage = 'parameters must be numbers'
    expect(() => { sum(4, '5') }).toThrowError(expectedErrorMessage);
  });
});
