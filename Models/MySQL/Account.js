'use strict'
const { DataTypes } = require('sequelize');

const Account = (MySql) => {
    const attributes = {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };

    const options = {
        setterMethods: {

        },
        getterMethods: {

        }
    };

    return MySql.define('Account', attributes, options);
};

module.exports = Account;
