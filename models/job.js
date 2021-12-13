'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {

    static associate(models) {

      models.Job.belongsTo(models.User, {
        foreignKey: 'jobId'
      })
    }
  };
  Job.init({
    name: DataTypes.STRING,
    domain: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};