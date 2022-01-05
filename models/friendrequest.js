'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FriendRequest extends Model {
 
    static associate(models) {
      models.FriendRequest.belongsTo(
        models.User, {
          foreignKey: 'fromUserId'
        }
      )
      
      models.FriendRequest.belongsTo(
        models.User, {
          foreignKey: 'toUserId'
        }
      )
      
    }
};
  FriendRequest.init({
    fromUserId: DataTypes.INTEGER,
    toUserId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FriendRequest',
    timestamps: false,
  });
  return FriendRequest;
};