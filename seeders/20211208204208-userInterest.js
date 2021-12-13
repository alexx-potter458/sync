'use strict';

const db = require("../models");
const faker = require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    await queryInterface.bulkDelete('UserInterests', null, {})
  }
};
