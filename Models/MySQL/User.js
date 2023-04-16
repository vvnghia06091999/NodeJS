'use strict'
const { DataTypes } = require('sequelize');

const User = (MySql) => {
    const attributes = {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    };

    const options = {
        setterMethods: {
            fullName: (value) => {
                const name = value.split(' ');
                const firstName = name[0];
                const lastName = name.slice(1).join(' ');
                this.setDataValue('firstName', firstName);
                this.setDataValue('lastName', lastName);
            },
        },
        getterMethods: {
            fullName: () => {
                return this.firstName + ' ' + this.lastName;
            }
        }
    };

    return MySql.define('User', attributes, options);
};

module.exports = User;
