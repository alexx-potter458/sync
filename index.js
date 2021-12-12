const express = require('express');
const { port } = require('./config/express');
const schema = require('./graphql');
const { graphqlHTTP } = require('express-graphql');

const {getAllUsers, getUserById} = require('./controllers/users')

const app = express();

//.use - folosit pe toate tipurile de requesturi / toate rutele
//toate req care se duc la un graphql api sunt de tip post
//ignora toate status code urile / error handling nu se face la nivel de status code
app.use('/graphql', graphqlHTTP({ schema }));

app.get('/users', getAllUsers)

app.get('/users:id', getUserById)

app.listen(port, () => {
    console.log('Server started on: ', port);
});