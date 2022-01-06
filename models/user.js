'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      models.User.belongsToMany(models.Interest, {
        through: models.UserInterest
      })

      models.User.hasOne(models.Job, {
        foreignKey: 'jobId',
      })

      models.User.hasMany(models.Post)
      models.User.hasMany(models.FriendRequest)
      models.User.hasMany(models.Friend)
    }
  };
  User.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};