const {GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");


const createPostInputType = new GraphQLInputObjectType({
    name: 'CreatePostInput',
    fields: {
        postText: {type: GraphQLString},
    }
})

module.exports = createPostInputType;