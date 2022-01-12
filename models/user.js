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

            models.User.belongsTo(models.Role, {
                foreignKey: 'roleId'
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
        
        async can(permissionName) {
            const role = await this.getRole();
            const permissions = role.permissions;
            return permissions.indexOf(permissionName) !== -1;
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
        password: DataTypes.STRING,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User',
        timestamps: false,
    });
    return User;
};