"use strict";
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []
    for(let i = 0; i < 100; i ++){
      dateFake.push({
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: parseInt(Math.random() * 80) + 20,
        jobId: parseInt(Math.random() * 100),
        statusId: parseInt(Math.random() * 3) + 1,
      })
    }

    await queryInterface.bulkInsert("Users", dateFake, {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
