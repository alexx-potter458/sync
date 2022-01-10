const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean} = require("graphql");

const friendRequestType = new GraphQLObjectType({
    name: 'FriendRequest',
    fields: {
        fromUserId: {type: GraphQLID},
        toUserId: {type: GraphQLID},
        status: {type: GraphQLBoolean},
    }
})

module.exports = friendRequestType;