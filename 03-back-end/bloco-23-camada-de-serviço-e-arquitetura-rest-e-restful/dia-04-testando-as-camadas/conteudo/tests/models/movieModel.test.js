const { expect } = require('chai');

const MoviesModel = {
  create: () => { }
};

descibre('Insere um novo filme no BD', () => {
  const payloadMovie = {
    tittle: 'Example Movie',
    directedBy: 'Jane Dow',
    realeaseYear: 1999
  };

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});