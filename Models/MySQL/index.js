'use strict'
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../Configs/mysqlConfigs');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        pool: config.pool,
        logging: config.logging
    }
);

const MySQL = {sequelize};

/**
 * Models
 */
MySQL.User = require('./User')(sequelize);
MySQL.Account = require('./Account')(sequelize);
MySQL.Car = require('./Car')(sequelize);
/**
 * Models associated element
 */
MySQL.User.hasOne(MySQL.Account);
MySQL.Account.belongsTo(MySQL.User);
MySQL.User.hasMany(MySQL.Car);
MySQL.Car.belongsTo(MySQL.User);


module.exports = MySQL;
