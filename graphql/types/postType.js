const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");
const userSecondary = require('./userSecondaryType');
const db = require('../../models');


const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id:{type:GraphQLID},
        postText: {type: GraphQLString},
        author: {
            type: userSecondary,
            resolve: async (source) => { 
                return (await db.User.findByPk(source.userId));
            }
        }
    }
})

module.exports = postType;