const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");

const interestType = new GraphQLObjectType({
    name: 'Interest',
    fields: {
        id:{type:GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
    }
})

module.exports = interestType;