const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull} = require('graphql');
const db = require('../models');
const userType = require('./types/userType')
const postType = require('./types/postType')
const interestType = require('./types/interestType')
const userInterestType = require('./types/userInterestType')
const userFriendType = require('./types/userFriendType')
//in db am users interests si companies

// userName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     firsName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     jobId: DataTypes.INTEGER,
//     statusId: DataTypes.INTEGER

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(userType),
            resolve: async () => {
                return await db.User.findAll();
            }
        },
        user:{
            type:userType,
            args:{
                id:{
                    type:new GraphQLNonNull(GraphQLID),
                }
            },
            resolve: async (source, {id}, context) => {
                return await  db.User.findByPk(id);
            }
        },
        interests:{
            type: new GraphQLList(interestType),
            resolve:async () => {
                return await db.Interest.findAll();
            }
        },
        interest:{
            type: interestType,
            args:{
                id:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, {id}) => {
                return await db.Interest.findByPk(id);
            }
        },
        post:{
            type:postType,
            args:{
                id:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async(source, {id}) =>{
                return await db.Post.findByPk(id);
            }
        },
        posts:{
            type:new GraphQLList(postType),
            resolve: async () =>{
                return await db.Post.findAll();
            }
        },
        allUserInterests:{
            type:new GraphQLList(userInterestType),
            resolve: async () =>{
                return await db.UserInterest.findAll();
            }
        },
        userInterests:{
            type:new GraphQLList(userInterestType),
            args:{
                userId:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, {userId}) =>{
                return await db.UserInterest.findAll({
                    where: {
                        userId
                    }
                  });
            }
        },
        userFriend:{
            type:new GraphQLList(userFriendType),
            args:{
                userId:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, {userId}) =>{
                return await db.Friend.findAll({
                    where: {
                        firstUserId: userId
                    }
                  });
            }
        }
    }
});

module.exports = queryType;