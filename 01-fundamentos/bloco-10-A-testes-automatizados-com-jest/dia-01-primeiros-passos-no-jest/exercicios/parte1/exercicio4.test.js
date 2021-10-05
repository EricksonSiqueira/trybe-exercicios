const myFizzBuzz = require('./exercicio4');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é "fizzbuzz"', () => {
    const expected = 'fizzbuzz'
    expect(myFizzBuzz(15)).toBe(expected);
  });
  it('Chama função com um número divisível por 3 e verifica se o retorno é "fizz"', () => {
    const expected = 'fizz';
    expect(myFizzBuzz(6)).toBe(expected);
  });
  it('Chama função com um número divisível por 5 e verifica se o retorno é "buzz"', () => {
    const expected = 'buzz';
    expect(myFizzBuzz(10)).toBe(expected);
  });
  it('Chama função com um número que não é divisível por 3 ou 5 e verifica se o retorno é o numero passado', () => {
    const expected = 7;
    expect(myFizzBuzz(7)).toBe(expected);
  });
  it('Chama função com um parâmetro que não é um número e verifica se o retorno é o false', () => {
    const expected = false;
    expect(myFizzBuzz('Isaac não é o mestre do testes')).toBe(expected);
  });
})
