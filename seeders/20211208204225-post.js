'use strict';
const faker = require('faker')
const db = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []
    const allUsers = await db.User.findAll();
    for(let i=0;i<200;i++){
      const userId = Math.floor(Math.random() * (allUsers.length - 1));
      dateFake.push({
        userId,
        postText:faker.lorem.paragraphs(),
      })
    }
    await queryInterface.bulkInsert('Posts', dateFake , {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
