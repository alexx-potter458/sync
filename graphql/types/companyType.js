const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");

const db = require('../../models');
// const userSecondaryType = require("./userSecondaryType");


module.exports = new GraphQLObjectType({
    name: 'Company',
    fields: ()=>{
        const userType = require("./userType");
        return ({
            id: {type: GraphQLID},
            name:{type:GraphQLString},
            users: {
                type: new GraphQLList(userType),
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
        })
    }

})
