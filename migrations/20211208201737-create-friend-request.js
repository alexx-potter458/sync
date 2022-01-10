'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FriendRequests', {
      fromUserId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      toUserId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FriendRequests');
  }
};