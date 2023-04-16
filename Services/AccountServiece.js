'use strict'
const Account = require('../Models/MySQL').Account;

const AccountServiece = {
    addAccount: async (account) => {
        return Account.create(account);
    },
    updateAccount: async (account) => {
        return Account.update(account, {
            where: {
                id: account.id
            }
        });
    },
    getAccount: async (userName) => {
        return Account.findOne({
            where: {
                userName: userName
            }
        });
    },
    deleteAccount: async (accountID) => {
        return Account.destroy({
            where: {
                id: accountID
            }
        });
    },
};

module.exports = AccountServiece;
