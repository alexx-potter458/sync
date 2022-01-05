'use strict';

const db = require("../models");
const faker = require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateFake = []

    let arr = [];

    while(arr.length < 60){
        let r = Math.floor(Math.random() * 99) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    for(let i = 0; i < arr.length - 3; i += 2){

      const userId = arr[i];
      const interestId = arr[i+1];

      dateFake.push({
        userId,
        interestId,
      })
    }
    await queryInterface.bulkInsert('UserInterests', dateFake , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserInterests', null, {})
  }
};
