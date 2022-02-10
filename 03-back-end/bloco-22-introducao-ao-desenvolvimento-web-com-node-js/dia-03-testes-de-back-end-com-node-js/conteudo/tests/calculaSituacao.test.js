const { expect } = require("chai");
const calculaSituacao = require("../calculaSituacao");

describe('Quando a média for menor que 7', () => {
  it('Retorna "reprovado', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
})