'use strict'
const mongoose = require('mongoose');
const config = require('../../Configs/mongoDBConfigs');

const MongoDB = mongoose.createConnection(config.URL);

MongoDB.on('connected', () => {
    console.log('Connected MongoDB');
});

MongoDB.on('diconnected', () => {
    console.log('Diconnected MongoDB');
});

MongoDB.on('error', (err) => {
    console.log(err);
})

MongoDB.connect = mongoose.connect(config.URL);

process.on('SIGINT', async () => {
    await MongoDB.close();
    process.exit(0);
});

module.exports = MongoDB;
