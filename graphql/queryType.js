const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull} = require('graphql');
const db = require('../models');
const userType = require('./types/userType')
const postType = require('./types/postType')
const interestType = require('./types/interestType')

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(userType),
            resolve: async () => {
                return await db.User.findAll();
            }
        },
        user:{
            type:userType,
            args:{
                id:{
                    type:new GraphQLNonNull(GraphQLID),
                }
            },
            resolve: async (source, {id}, context) => {
                return await  db.User.findByPk(id);
            }
        },
        interests:{
            type: new GraphQLList(interestType),
            resolve:async () => {
                return await db.Interest.findAll();
            }
        },
        interest:{
            type: interestType,
            args:{
                id:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, {id}) => {
                return await db.Interest.findByPk(id);
            }
        },
        posts:{
            type:new GraphQLList(postType),
            resolve: async () =>{
                return await db.Post.findAll();
            }
        },
        post:{
            type:postType,
            args:{
                id:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async(source, {id}) =>{
                return await db.Post.findByPk(id);
            }
        },  
    }
});

module.exports = queryType;