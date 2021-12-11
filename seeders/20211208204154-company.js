'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dateFake = []
    for(let i = 0; i < 100; i ++){
      dateFake.push({
        name: faker.internet.userName('fuk', 'company'),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert("Companies", dateFake, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Companies', null, {})
  }
};
