const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLID} = require("graphql");


const addInterestInputTypeWithInterestId = new GraphQLInputObjectType({
    name: 'addInterestInputTypeWithInterestId',
    fields: {
        id: {type: GraphQLInt},
    }
})

module.exports = addInterestInputTypeWithInterestId