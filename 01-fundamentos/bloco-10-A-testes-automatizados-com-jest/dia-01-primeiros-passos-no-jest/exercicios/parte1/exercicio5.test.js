const {obj1, obj2, obj3} = require('./exercicio5');

describe('Comparando objetos e verificando se são iguais', () => {
  it('Verificando se o obj1 é igual ao obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Verificando se obj1 é diferente do obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('Verificando se obj2 é diferente do obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
