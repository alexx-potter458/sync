'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      models.Company.hasMany(models.Job)
      
    }
  };
  Company.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
    timestamps: false,
  });
  return Company;
};