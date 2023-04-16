'use strict'

const express = require('express');
const session = require('express-session');
const http = require('http');
const cors = require('cors');
const MySQL = require('./Models/MySQL');
const serverConfig = require('./Configs/serverConfig');
const router = require('./Routers');
const bodyParser  = require('body-parser');
const morgan = require('morgan');
require('express-async-errors');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

try {
    MySQL.sequelize.sync({force: true}).then(() => console.log('Connected MySQL'));
    require('./Models/MongoDB');
} catch (error) {
    console.log(error);
}

router(app);

const server = http.createServer(app);
server.listen(serverConfig.PORT, () => {
    console.log('Server is running PORT :' + serverConfig.PORT);
});