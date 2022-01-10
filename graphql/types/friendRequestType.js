const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean} = require("graphql");

const friendRequestType = new GraphQLObjectType({
    name: 'FriendRequest',
    fields: {
        id:{type:GraphQLID},
        fromUserId: {type: GraphQLID},
        toUserId: {type: GraphQLID},
        status: {type: GraphQLBoolean},
    }
})

module.exports = friendRequestType;