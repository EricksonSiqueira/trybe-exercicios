const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testes função que coloca string em maiúsculo', () => {
  it('Recebe "oliva a lenda" e devolve "OLIVA A LENDA"', (done) => {
    uppercase('oliva a lenda', (upperString) => {
      expect(upperString).toBe('OLIVA A LENDA');
      done();
    });
  });
  it('Recebe "oliva semideus" e espera que não retorne "OLIVA NADINHA"', (done) => {
    uppercase('oliva semideus', (upperString) => {
      expect(upperString).not.toBe('OLIVA NADINHA');
      done();
    })
  })
});
