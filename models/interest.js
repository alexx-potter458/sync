'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
 
    static associate(models) {
      
      models.Interest.belongsToMany(models.User, {
        through: models.UserInterest
      })

    }
  };
  Interest.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Interest',
    timestamps: false,
  });
  return Interest;
};