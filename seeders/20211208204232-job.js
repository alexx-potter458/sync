'use strict';

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    for(let i = 0; i < 100; i ++){
      data.push({
        name: faker.name.jobTitle(),
        domain: faker.commerce.department(),
        companyId: parseInt(Math.random() * 99) + 1,
      })
    }

    await queryInterface.bulkInsert("Jobs", data , {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {})
  }
};
