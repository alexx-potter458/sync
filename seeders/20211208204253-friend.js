'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []

    let arr = [];
    while(arr.length < 50){
        let r = Math.floor(Math.random() * 79) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    for(let i = 0; i < arr.length - 3; i += 2) {

      data.push ({
        userId: arr[i],
        friendId: arr[i+1]
      },{
        userId: arr[i+1],
        friendId: arr[i]
      })

    }

    await queryInterface.bulkInsert("Friends", data , {})   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Friends', null, {})
  }
};
