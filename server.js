'use strict'
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const http = require('http');
const cors = require('cors');

const app = express();
const models = require('./Models');
const router = require('./Routers/index');

app.use(express.json());
app.use(express.urlencoded);
models.init();
router(app);

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log('Server is running PORT :' + process.env.PORT);
});