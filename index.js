const express = require('express');
const schema = require('./graphql');

const { port } = require('./config/express');
const { graphqlHTTP } = require('express-graphql');
const authorizationMiddleware = require('./middlewares/authorization');

const app = express();

//.use - folosit pe toate tipurile de requesturi / toate rutele
//toate req care se duc la un graphql api sunt de tip post
//ignora toate status code urile / error handling nu se face la nivel de status code
app.use('/graphql',authorizationMiddleware, graphqlHTTP({ schema }));

app.listen(port, () => {
    console.log('Server started on: ', port);
});