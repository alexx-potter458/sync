'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []

    let arr = [];

    while(arr.length < 60){
        let r = Math.floor(Math.random() * 99) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    for(let i = 0; i < arr.length - 2; i ++){

      const userId = arr[i];
      const jobId = arr[i+1];

      dateFake.push({
        userId,
        jobId,
      })
    }
    await queryInterface.bulkInsert('UserJobs', dateFake , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('UserJobs', null, {})
  }
};
