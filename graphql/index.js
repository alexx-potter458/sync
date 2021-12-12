const { GraphQLSchema } = require('graphql');

const query = require('./queryType');
const mutation = require('./mutationType')

const schema = new GraphQLSchema({ query
    // ,mutation
});

module.exports = schema;