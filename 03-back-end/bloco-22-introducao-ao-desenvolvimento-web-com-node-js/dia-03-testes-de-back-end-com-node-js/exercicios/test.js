const { expect } = require('chai');

const verificarNumero = require('./verificarNumero');

describe('Verifica parametro recebido', () => {
  describe('Quando o número passado for maior do que 0', () => {
    it('Retora positivo', () => {
      expect(verificarNumero(1)).to.be.equal('Positivo');
    });
  });
  describe('Quando o número passado for menor do que 0', () => {
    it('Retora negativo', () => {
      expect(verificarNumero(-1)).to.be.equal('Negativo')
    });
  });
  describe('Quando o número passado for igual a 0', () => {
    it('Retora neutro', () => {
      expect(verificarNumero(0)).to.be.equal('Neutro');
    });
  });
  describe('Quando o valor passado não é um número', () => {
    it('O valor deve ser um número', () => {
      expect(verificarNumero('não é um número')).to.be.equal('O valor deve ser um número');
    });
  });
});
