'use strict'
const { DataTypes } = require('sequelize');

const Car = (MySql) => {
    const attributes = {
        nameCar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeCar: {
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

    return MySql.define('Car', attributes, options);
};

module.exports = Car;
