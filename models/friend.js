'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    static associate(models) {
      models.Friend.belongsTo(
        models.User, {
          foreignKey: 'userId'
        }
      )
      
        models.Friend.belongsTo(
          models.User, {
            foreignKey: 'friendId'
          }
        )
    }
  };
  Friend.init({
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
    timestamps: false,
  });
  return Friend;
};