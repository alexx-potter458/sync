const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLID} = require("graphql");


const addInterestInputType = new GraphQLInputObjectType({
    name: 'addInterestInput',
    fields: {
        name: {type: GraphQLString},
    }
})

module.exports = addInterestInputType