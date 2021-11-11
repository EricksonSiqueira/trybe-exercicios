let retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

// test('quando o número aleatório é par, a função retorna `true`', () => {
//   expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
// });


test("Mockando para retornar true", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);
});

test("Chamando a função varias vezes.", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});
