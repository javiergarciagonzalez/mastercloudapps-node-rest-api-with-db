const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

const routes = require('./router');

server.listen(port, () => {
    // eslint-disable-next-line
    console.log(`App listening on port ${port}!`);
});

// Setup routing
server.use('/', routes.books);
