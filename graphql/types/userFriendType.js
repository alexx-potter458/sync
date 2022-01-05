const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} = require("graphql");
const userType = require('./userType');
const {use} = require("express/lib/router");

const userFriendType = new GraphQLObjectType({
    name: 'UserFriend',
    fields: {
        firstUserId: {type:new GraphQLNonNull(GraphQLID)},
        secondUserId: {type:new GraphQLNonNull(GraphQLID)},
        user:{
            type:userType,
            resolve: async (source) =>{ 
                return await source.getUser();
            }
        },
        friend:{
            type:userType,
            resolve: async (source) =>{
                return await source.getInterest();
            }
        }
    }
})
module.exports = userFriendType;