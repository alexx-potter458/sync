'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    static associate(models) {

    }
  };
  Friend.init({
    firstUserId: DataTypes.INTEGER,
    secondUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};