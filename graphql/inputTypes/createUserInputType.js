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
            type:new GraphQLNonNull(GraphQLString)
        },
        lastName:{
            type:new GraphQLNonNull(GraphQLString)
        },
        userName:{
            type:new GraphQLNonNull(GraphQLString)
        },
        age:{
            type:new GraphQLNonNull(GraphQLInt)
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