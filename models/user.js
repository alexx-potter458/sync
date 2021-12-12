'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post, {
        foreignKey: 'userId'
      })
      models.User.hasMany(models.UserInterest, {
        foreignKey: 'userId'
      })
      models.User.hasMany(models.FriendRequest, {
        foreignKey: 'fromUserId'
      })
      models.User.hasOne(models.Job)
    }
  };
  User.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    firsName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};