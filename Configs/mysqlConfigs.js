'use strict'
require('dotenv').config();

const config = {
    database: process.env.DATABASEMYSQL,
    username: process.env.USERNAMEMYSQL,
    password: process.env.PASSWORDMYSQL,
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
};

module.exports = config;
