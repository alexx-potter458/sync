const express = require('express');
const { port } = require('./config/express');
const schema = require('./graphql');
const { graphqlHTTP } = require('express-graphql');

const {getAllUsers, getUserById} = require('./controllers/users')

const app = express();

app.use('/graphql', graphqlHTTP({ schema }));

app.get('/users', getAllUsers)

app.get('/users:id', getUserById)

app.listen(port, () => {
    console.log('Server started on: ', port);
});