'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userID: Number,
    userName: String,
    token: String
});

module.exports = mongoose.model('Auth', schema);
