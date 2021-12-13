'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []
    for(let i = 0; i < 100; i ++){
      dateFake.push({
        name: faker.internet.userName('fuk', 'me interes'),
        description: faker.commerce.productDescription(),
        status: faker.datatype.boolean(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert("Interests", dateFake, {})
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Interests', null, {})
  }
};
