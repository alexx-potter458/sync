const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull} = require('graphql');
const db = require('../models');
const userType = require('./types/userType')
const postType = require('./types/postType')
const interestType = require('./types/interestType')
const userInterestType = require('./types/userInterestType')
//in db am users interests si companies

// userName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     firsName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     jobId: DataTypes.INTEGER,
//     statusId: DataTypes.INTEGER

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        // hello:{
        //     type:GraphQLString,
        //     args:{
        //         name:{
        //             type:GraphQLString,
        //         }
        //     },
        //      //the actual function care va fi executata in momentul in care cineva face query ul respectiv - virgil 2021
        //     resolve: (_, {name}) =>{
        //         console.log("args:",args)
        //         if(name){
        //             return `Hello, ${name}`
        //         }else {
        //             return "Hello world";
        //         }
        //     }
        // }
        users: {
            type: new GraphQLList(userType),
            resolve: async () => {
                //the actual query to the baza de date
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
        posts:{
            type:new GraphQLList(postType),
            resolve: async () =>{
                return await db.Post.findAll();
            }
        },
        userInterests:{
            type:new GraphQLList(userInterestType),
            resolve: async () =>{
                return await db.UserInterest.findAll();
            }
        }
    }
});

module.exports = queryType;