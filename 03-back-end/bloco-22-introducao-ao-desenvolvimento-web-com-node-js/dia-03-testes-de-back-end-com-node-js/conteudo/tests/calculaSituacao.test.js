const { expect } = require("chai");
const calculaSituacao = require("../calculaSituacao");

describe('Quando a média for menor que 7', () => {
  it('Retorna "reprovado', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('Retorna "aprovado"', () => {
    const resposta = calculaSituacao(8);

    expect(resposta).to.be.equals('aprovado');
  })
});

describe('Quando a édia for igual a 7', () => {
  it('Retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovado');
  })
});
