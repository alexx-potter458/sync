'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInterest extends Model {

    static associate(models) {
      models.UserInterest.belongsTo(
          models.User, {
            foreignKey:"userId"
          }
      )
      models.UserInterest.belongsTo(
        models.Interest, {
          foreignKey:"interestId"
        }
      )

    }
  };
  UserInterest.init({
    userId: DataTypes.INTEGER,
    interestId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserInterest',
    timestamps: false,
  });
  return UserInterest;
};