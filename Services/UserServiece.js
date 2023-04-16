'use strict'
const User = require('../Models/MySQL').User;

const UserServiece = {
    addUser: async (user) => {
        let result;
        await User.create(user).then(data => {
            result = data;
        }).catch(err => {
            console.log(err);
            result = false;
        });
        return result;
    },
    editUser: async (user) => {
        return User.update(user, {
            where: {
              id: user.id
            }
        });
    },
    deleteUser: async (userID) => {
        return User.destroy({
            where: {
                id: userID
            }
        });
    },
    findListUsers: async (options) => {
        const where = options.where ? options.where : {};
        const skip = options.skip ? options.skip : 0;
        const limit = options.limit ? options.limit : 10;
        return { total, rows } = User.findAndCountAll({
            where: where,
            offset: skip * limit,
            limit: limit
        });
    },
    getUserByID: async (userID) => {
        return User.findByPk(userID);
    },
};

module.exports = UserServiece;
