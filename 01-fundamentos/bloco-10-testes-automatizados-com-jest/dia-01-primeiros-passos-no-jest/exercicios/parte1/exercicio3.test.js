const myRemoveWithoutCopy = require('./exercicio3');

describe('Função recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const expected = [1, 2, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual(expected);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const expected = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual(expected);
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado')
});
