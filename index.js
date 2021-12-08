const express = require('express');
const { port } = require('./config/express');
const schema = require('./graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({ schema }));

app.listen(port, () => {
    console.log('Server started on: ', port);
});