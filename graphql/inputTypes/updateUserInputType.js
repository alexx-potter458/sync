const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");


const updateUserInputType = new GraphQLInputObjectType({
    name: 'UpdateUserInputType',
    fields: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        userName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        jobId: {
            type: GraphQLInt
        },
        status: {
            type: GraphQLString
        }
    }
})

module.exports = updateUserInputType;