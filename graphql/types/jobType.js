const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");

const jobType = new GraphQLObjectType({
    name: 'Job',
    fields: {
        id: {type: GraphQLID},
        name:{type:GraphQLString},
        domain: {type: GraphQLString},
    }
})

module.exports = jobType;