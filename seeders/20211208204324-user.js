"use strict";
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert("People", [{
     *   name: "John Doe",
     *   isBetaMember: false
     * }], {});
    */

    const dateFake = []
    for(let i = 0; i < 100; i ++){
      dateFake.push({
        userName: faker.internet.userName('fuk', 'me'),
        email: faker.internet.email('fuk', 'you'),
        firsName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: parseInt(Math.random() * 100),
        jobId: 1,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert("Users", dateFake, {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete("People", null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
