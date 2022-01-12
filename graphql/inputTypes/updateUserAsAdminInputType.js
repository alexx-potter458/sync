const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLID} = require("graphql");


const updateUserAsAdminInputType = new GraphQLInputObjectType({
    name: 'UpdateUserAsAdmin',
    fields: {
        id:{
            type: new GraphQLNonNull(GraphQLID)
        },
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
            type: GraphQLString
        }
    }
})

module.exports = updateUserAsAdminInputType;