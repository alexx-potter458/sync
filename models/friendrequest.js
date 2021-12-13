'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FriendRequest extends Model {
 
    static associate(models) {

    }
  };
  FriendRequest.init({
    fromUserId: DataTypes.INTEGER,
    toUserId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FriendRequest',
  });
  return FriendRequest;
};