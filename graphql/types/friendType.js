const {GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");
const db = require('../../models');


module.exports = new GraphQLObjectType({
    name: 'Friend',
    fields: () => {
        const userType = require('./userType');
        return ({
            id: {type: GraphQLID},
            userId: {type: GraphQLString},
            friendId: {type: GraphQLString},
            friend: {
                type: userType,
                resolve: async (source) => {
                    console.log(source)
                    return (await db.User.findByPk(source.friendId));
                }
            }
        })
    },

})
