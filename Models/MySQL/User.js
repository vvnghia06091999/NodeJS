'use strict'
const { DataTypes } = require('sequelize');

const User = (MySql) => {
    const attributes = {
        fisrtName: {
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
                const fisrtName = name[0];
                const lastName = name.slice(1).join(' ');
                this.setDataValue('fisrtName', fisrtName);
                this.setDataValue('lastName', lastName);
            },
        },
        getterMethods: {
            fullName: () => {
                return this.fisrtName + ' ' + this.lastName;
            }
        }
    };

    return MySql.define('User', attributes, options);
};

module.exports = User;
