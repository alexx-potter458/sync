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
        firsName:{
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
        statusId:{
            type:GraphQLInt
        }
    }
})

module.exports = createUserInputType;