const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");
const db = require('../../models');
const userSecondary = require('./userSecondaryType');


const friendType = new GraphQLObjectType({
    name: 'Friend',
    fields: {
        id:{type:GraphQLID},
        userId:{type:GraphQLString},
        friendId:{type:GraphQLString},
        friend: {
            type: userSecondary,
            resolve: async (source) => { 
                console.log(source)
                return (await db.User.findByPk(source.friendId));
            }
        }
        
    }
})

module.exports = friendType;