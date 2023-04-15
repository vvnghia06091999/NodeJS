'use strict'
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../Configs/mysqlConfigs');

const MySql = new Sequelize(
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

/**
 * Models
 */
MySql.User = require('./User')(MySql);
MySql.Account = require('./Account')(MySql);
/**
 * Models associated element
 */
MySql.User.belongsTo(MySql.Account, {as: 'account'});

module.exports = MySql;
