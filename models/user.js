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

            // models.User.belongsToMany(models.Job, {
            //     through: models.UserJob
            // })
            models.User.belongsTo(models.Job,{
                foreignKey:'jobId'
            })
            models.User.hasMany(models.Post)
            // models.User.hasMany(models.FriendRequest)
            models.User.belongsToMany(models.User, {
                through: models.FriendRequest,
                as: 'User1',
                foreignKey: 'toUserId',
                otherKey:'fromUserId'
            })
            models.User.belongsToMany(models.User, {
                through: models.FriendRequest,
                as: 'User2',
                foreignKey: 'fromUserId',
                otherKey:'toUserId'
            })

            // models.User.belongsToMany(models.User, {
            //     through: models.Friend,
            //     as: 'Friend1',
            //     foreignKey: 'userId',
            //     otherKey:'friendId'
            // })
            // models.User.belongsToMany(models.User, {
            //     through: models.Friend,
            //     as: 'Friend2',
            //     foreignKey: 'friendId',
            //     otherKey:'userId'
            // })


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
        status: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
        timestamps: false,
    });
    return User;
};