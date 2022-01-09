const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");


const createUserInputType = new GraphQLInputObjectType({
    name: 'CreateUserInput',
    fields: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName:{
            type:GraphQLString
        },
        lastName:{
            type:GraphQLString
        },
        userName:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        jobId:{
            type:GraphQLInt
        },
        status:{
            type:GraphQLString
        }
    }
})

module.exports = createUserInputType;