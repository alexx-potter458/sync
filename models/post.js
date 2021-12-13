'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {

      models.Post.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  };
  Post.init({
    userId: DataTypes.INTEGER,
    postText: DataTypes.STRING,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};