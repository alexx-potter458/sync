const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");


const updateUserInputType = new GraphQLInputObjectType({
    name: 'UpdateUserInputType',
    fields: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
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
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})

module.exports = updateUserInputType;