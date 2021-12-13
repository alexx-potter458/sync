'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
        'Users',
        'password',
        {
          type: Sequelize.STRING,
          allowNull:false,
          defaultValue: 'password'
        },
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users','password')
  }
};
