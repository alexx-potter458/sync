'use strict';

const db = require("../models");
const faker = require("faker");
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
    const allUsers = await db.User.findAll();
    const allInterests = await db.Interest.findAll();
    for(let i=0;i<200;i++){
      const userId = Math.floor(Math.random() * (allUsers.length - 1) + 103);
      const interestId = Math.floor(Math.random() * (allInterests.length - 1));
      dateFake.push({
        userId,
        interestId,
        createdAt: new Date(),
        updatedAt:new Date()
      })
    }
    await queryInterface.bulkInsert('UserInterests', dateFake , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserInterests', null, {})
  }
};
