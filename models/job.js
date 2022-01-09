'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {

    static associate(models) {
      models.Job.belongsTo(models.Company, {
        foreignKey: 'companyId'
      })

      models.Job.belongsToMany(models.User, {
        through: models.UserJob
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
    timestamps: false,
  });
  return Job;
};