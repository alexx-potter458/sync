'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []

    data.push({
      name: 'Open for work',
    })
    
    data.push({
      name: 'Working',
    })
    
    data.push({
      name: 'Recruting',
    })

    await queryInterface.bulkInsert("Statuses", data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {})
  }
};
