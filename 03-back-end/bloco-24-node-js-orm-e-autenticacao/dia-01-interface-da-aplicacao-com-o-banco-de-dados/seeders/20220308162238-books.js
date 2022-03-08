'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Books",[
      {
        title: 'The way of kings',
        author: 'Robert Sanderson',
        pageQuantity: 1017,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        title: 'Name of the wind',
        author: 'Patrick Ruffus',
        pageQuantity: 520,
        createAt: new Date(),
        updateAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("Books", null, {})
  }
};
