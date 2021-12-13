const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");
const userType = new GraphQLObjectType({
    name: 'User',
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

module.exports = userType;