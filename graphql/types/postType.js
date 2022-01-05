const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} = require("graphql");
const userType = require('./userType');
const {use} = require("express/lib/router");

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id:{type:GraphQLID},  // ar fi source.id
        postText: {type: GraphQLString}, //ar fi source.postText
        author:{
            // type:new GraphQLNonNull(userType),
            type:userType,
            resolve: async (source) =>{  //ar fi post.author, dar noi folosim un
                //resolver custom
                return await source.getUser();
            }
        }
    }
})

module.exports = postType;