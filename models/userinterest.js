'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInterest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      models.UserInterest.belongsTo(
          models.User, {
            foreignKey:"userId"
          }
      )
      models.UserInterest.belongsTo(
          models.Interest,{
            foreignKey:"interestId"
          }
      )

    }
  };
  UserInterest.init({
    userId: DataTypes.INTEGER,
    interestId: DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'UserInterest',
  });
  return UserInterest;
};