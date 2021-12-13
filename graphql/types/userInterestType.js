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
            // type:new GraphQLNonNull(userType),
            type:userType,
            resolve: async (source) =>{  //ar fi post.author, dar noi folosim un
                //resolver custom
                // console.log("source in usertype " , source.userId)
                // console.log("user ",source.getInterest())
                return await source.getUser();
            }
        },
        interest:{
            type:interestType,
            resolve: async (source) =>{
                // console.log("interest ",source.getInterest())
                return await source.getInterest();
            }
        }
    }
})

module.exports = userInterestType;