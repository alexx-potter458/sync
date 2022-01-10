const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");

const db = require('../../models');


module.exports = new GraphQLObjectType({
    name: 'Post',
    fields: () => {
        const userType = require('./userType');

        return ({
            id: {type: GraphQLID},
            postText: {type: GraphQLString},
            author: {
                type: userType,
                resolve: async (source) => {
                    return (await db.User.findByPk(source.userId));
                }
            }
        })
    }
})
