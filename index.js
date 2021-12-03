const express = require('express');
const { port } = require('./configuration/express');

const app = express();

app.listen(port, () => {
    console.log('Server started on: ', port);
});