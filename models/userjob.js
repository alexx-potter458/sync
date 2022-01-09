'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserJob extends Model {

    static associate(models) {
      models.UserJob.belongsTo(
        models.User, {
          foreignKey:"userId"
        }
      )
      models.UserJob.belongsTo(
        models.Job, {
          foreignKey:"jobId"
        }
      )

    }
  };
  UserJob.init({
    userId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserJob',
    timestamps: false,
  });
  return UserJob;
};