const { GraphQLObjectType } = require('graphql');
 
  
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
    
    }
});
  
module.exports = queryType;