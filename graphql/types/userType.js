const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");
const interestType = require("./interestType");
const postType = require("./postType");
const friendType = require("./friendType");
const jobType = require('./jobType')
const companyType = require('./companyType');


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
            type: new GraphQLList(jobType),
            resolve: async (source) => {
                // console.log(source)
                return await source.getJobs()
            }
        },
        companies: {
            type: new GraphQLList(companyType),
            resolve: async (source) => {
                return await source.getCompanies()
            }
        },
        // usersByStatus: {
        //     type: new GraphQLList(statusType),
        //     resolve: async(source) => {
        //         return await source.getUser()
        //     }
        // }
    }
})

module.exports = userType;