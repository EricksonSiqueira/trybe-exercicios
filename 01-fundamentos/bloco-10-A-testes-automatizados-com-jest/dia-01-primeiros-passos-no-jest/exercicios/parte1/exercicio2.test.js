const myRemove = require('./exercicio2');

describe('Função que recebe um array e um item a ser removido desse array', () => {
  it('Passa ([1, 2, 3, 4] , 3) como parâmetros e espera receber [1, 2, 3]', () => {
    const expected = [1, 2, 4];
    expect(myRemove([1, 2, 3, 4,], 3)).toEqual(expected);
  });
  it('Passa ([1, 2, 3, 4], 3) como parâmetros e espera não receber [1, 2, 3, 4]', () => {
    const expected = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(expected);
  });
  it('Verifica se o array passado por parametro sofreu alteração', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3)
    expect(array).toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    const expected = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(expected);
  });
});
