'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []
    for(let i = 0; i < 100; i ++){
      dateFake.push({
        name: faker.company.companyName(),
      })
    }

    await queryInterface.bulkInsert("Companies", dateFake, {})
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Companies', null, {})
  }
};
