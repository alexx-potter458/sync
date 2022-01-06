const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");
const interestType = require("./interestType");
const postType = require("./postType");
const friendType = require("./friendType");


const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id:{type:GraphQLID},
        email: {type: GraphQLString},
        firsName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        age: {type: GraphQLString},
        jobId: {type: GraphQLString},
        statusId: {type: GraphQLString},
        posts:{
            type: new GraphQLList(postType),
            resolve: async (source) => { 
                return await source.getPosts();
            }
        },
        interests:{
            type: new GraphQLList(interestType),
            resolve: async (source) => { 
                return await source.getInterests();
            }
        },
        friends: {
            type: new GraphQLList(friendType),
            resolve: async (source) => {
                return await source.getFriends();
            }
        }
    }
})

module.exports = userType;