const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");



const userAsFriendType = new GraphQLObjectType({
    name: 'UserAsFriend',
    fields: {
        id:{type:GraphQLID},
        email: {type: GraphQLString},
        firsName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        age: {type: GraphQLString},
        jobId: {type: GraphQLString},
        statusId: {type: GraphQLString}
    }
})

module.exports = userAsFriendType;