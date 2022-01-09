const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");

const userSecondaryType = new GraphQLObjectType({
    name: 'UserSecondary',
    fields: {
        id:{type:GraphQLID},
        email: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        age: {type: GraphQLString},
        jobId: {type: GraphQLString},
        status: {type: GraphQLString}
    }
})

module.exports = userSecondaryType;