const { expect } = require('chai');

const fileCreator = require('./fileCreator');

describe('Verifica se o conteúdo foi escrito corretamente', () => {
  describe('Quando a função é chamada com o nome do arquivo e o conteúdo.', () => {
    it('Deve criar o arquivo com o conteúdo', () => {
      const fileName = 'arquivo.txt';
      const content = 'Conteúdo do arquivo';

      const result = fileCreator(fileName, content);

      expect(result).to.be.equal('ok');
    });
  });

  describe('Quando algum dos paramêtros vem vazio', () => {
    it('Deve retornar um erro', () => {
      const result = fileCreator();

      expect(result).to.be.equal('Os paramêtros não podem estar vazios');
    });
  });
})
