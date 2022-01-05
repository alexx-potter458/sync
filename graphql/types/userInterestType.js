const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} = require("graphql");
const userType = require('./userType');
const interestType = require('./interestType');
const {use} = require("express/lib/router");

const userInterestType = new GraphQLObjectType({
    name: 'UserInterest',
    fields: {
        userId: {type:new GraphQLNonNull(GraphQLID)},
        interestId: {type:new GraphQLNonNull(GraphQLID)},
        user:{
            type:userType,
            resolve: async (source) =>{ 
                return await source.getUser();
            }
        },
        interest:{
            type:interestType,
            resolve: async (source) =>{
                return await source.getInterest();
            }
        }
    }
})

module.exports = userInterestType;