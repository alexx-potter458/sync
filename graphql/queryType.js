const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull} = require('graphql');
const db = require('../models');
const userType = require('./types/userType')
const postType = require('./types/postType')
const interestType = require('./types/interestType');
const jobType = require('./types/jobType');
const companyType = require('./types/companyType');

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
        jobs:{
            type: new GraphQLList(jobType),
            resolve: async() => {
                return await db.Job.findAll()
            }
        },
        job: {
            type: jobType,
            args:{
                id:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, {id}) => {
                return await db.Job.findByPk(id);
            }
        },
        companies: {
            type: new GraphQLList(companyType),
            resolve: async(source) => {
                return await db.Company.findAll()
            }
        },
        usersByStatus: {
            type: new GraphQLList(userType),
            args:{
                status:{
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: async(source, {status}) => {
                console.log(status)
                return await db.User.findAll({
                    where: {status: status}
                })
            }
        }
    }
});

module.exports = queryType;