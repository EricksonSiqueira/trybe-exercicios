const {encode, decode} = require('./encode-decode');

describe('Testes das funções encode e decode', () => {
  it('Verificando se encode é uma função', () => {
    const expected = 'function';
    expect(typeof encode).toBe(expected);
  });
  it('Verificando se decode é uma função', () => {
    const expected = 'function';
    expect(typeof decode).toBe(expected);
  });
  it('Verificando se ao passar as vogais a, e, i, o, u retorna 1, 2, 3, 4 e 5, respectivamente', () => {
    const vogals = ['a', 'e', 'i', 'o', 'u'];
    const encodeNumbers = ['1', '2', '3', '4', '5'];
    vogals.forEach((vogal, index) => {
      const encodedNumber = encodeNumbers[index];
      expect(encode(vogal)).toBe(encodedNumber); 
    })
  });
  it('Verificando se ao passar os numeros 1, 2, 3, 4 e 5 retorna a, e, i, o, u, respectivamente', () => {
    const vogals = ['a', 'e', 'i', 'o', 'u'];
    const encodeNumbers = ['1', '2', '3', '4', '5'];
    encodeNumbers.forEach((number, index) => {
      const vogal = vogals[index];
      expect(decode(number)).toBe(vogal);
    })
  });
  it('Verificando se a string devolvida pelo encode é do mesmo tamanho da string passada como parametro', () => {
    const string = 'hi there';
    const expected = string.length;
    expect(encode(string).length).toBe(expected);
  })
  it('Verificando se a string devolvida pelo decode é do mesmo tamanho da string passada como parametro', () => {
    const string = 'h3 th2r2';
    const expected = string.length;
    expect(decode(string).length).toBe(expected);
  })
})
