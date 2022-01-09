const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");
const userType = require("./userType");
const db = require('../../models');
const userSecondaryType = require("./userSecondaryType");


const companyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: {type: GraphQLID},
        name:{type:GraphQLString},
        users: {
            type: new GraphQLList(userSecondaryType),
            resolve: async (source) => { 
                console.log(source)
                return await db.User.findAll({
                    include: [{
                        model: db.Job,
                        where: {companyId: source.id},
                        require: true
                    }]
                })
            }
                  
        }
    }
})

module.exports = companyType;