const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");
const db = require('../../models');
const UserAsFriend = require('./userAsFriendType');


const friendType = new GraphQLObjectType({
    name: 'Friend',
    fields: {
        id:{type:GraphQLID},
        userId:{type:GraphQLString},
        friendId:{type:GraphQLString},
        user: {
            type: UserAsFriend,
            resolve: async (source) => { 
                // console.log(source)
                return await  db.User.findByPk(source.friendId);
            }
        }
        
    }
})

module.exports = friendType;