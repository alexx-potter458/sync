'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []
    for(let i = 0; i < 100; i ++){
      dateFake.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        status: faker.datatype.boolean(),
      })
    }

    await queryInterface.bulkInsert("Interests", dateFake, {})
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Interests', null, {})
  }
};
