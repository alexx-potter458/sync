'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    static associate(models) {
      models.Friend.belongsTo(
        models.User, {
          foreignKey: 'firstUserId'
        }
      )
      
        models.Friend.belongsTo(
          models.User, {
            foreignKey: 'secondUserId'
          }
        )
    }
  };
  Friend.init({
    firstUserId: DataTypes.INTEGER,
    secondUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
    timestamps: false,
  });
  return Friend;
};