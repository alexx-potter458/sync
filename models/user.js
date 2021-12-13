'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      models.User.hasMany(models.Post, {
        foreignKey: 'userId'
      })
      models.User.belongsToMany(models.Interest, {
        through: models.UserInterest
      })
      models.User.hasMany(models.UserInterest, {
        foreignKey:'userId'
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
    statusId: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};