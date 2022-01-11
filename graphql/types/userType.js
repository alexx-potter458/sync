const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");
const interestType = require("./interestType");
const postType = require("./postType");
const friendType = require("./friendType");
const friendRequestType = require("./friendRequestType");
const jobType = require('./jobType')
const companyType = require('./companyType');
const {getFriendRequestsForUser} = require('../../repository/friendRequests')

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id:{type:GraphQLID},
        email: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        age: {type: GraphQLString},
        jobId: {type: GraphQLString},
        status: {type: GraphQLString},
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
        },
        jobs: {
            type: jobType,
            resolve: async (source) => {
                try {
                    const aux = await source.getJob()
                    console.log("aici e ce cauti: ", aux)
                    return await source.getJob()
                }catch (error){
                    console.error(error)
                    return null
                }
            }
        },
        // companies: {
        //     type: new GraphQLList(companyType),
        //     resolve: async (source) => {
        //         return await source.getCompanies()
        //     }
        // },
        friendRequests:{
            type: new GraphQLList(friendRequestType),
            resolve: async (source, args, context) =>{
                // console.log(await source.getFriendRequests())
                // return await source.getFriendRequests()
                return getFriendRequestsForUser(source)
                // return null
            }
        }
        // usersByStatus: {
        //     type: new GraphQLList(statusType),
        //     resolve: async(source) => {
        //         return await source.getUser()
        //     }
        // }
    }
})

module.exports = userType;