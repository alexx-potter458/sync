'use strict';
const faker = require('faker')
const db = require('../models')
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
    for(let i=0;i<200;i++){
      const userId = Math.floor(Math.random() * (allUsers.length - 1));
      dateFake.push({
        userId,
        postText:faker.lorem.paragraphs(),
        createdAt:new Date(),
        updatedAt:new Date()
      })
    }
    await queryInterface.bulkInsert('Posts', dateFake , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
