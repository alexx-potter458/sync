'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []

    let arr = [];
    while(arr.length < 18){
        let r = Math.floor(Math.random() * 19) + 81;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    for(let i = 0; i < arr.length - 3; i += 2) {

      data.push ({
        fromUserId: arr[i],
        toUserId: arr[i+1],
        status: false,
      })
    }

    await queryInterface.bulkInsert("FriendRequests", data , {})   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FriendRequests', null, {})
  }
};
