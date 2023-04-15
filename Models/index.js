'use strict'

const MySql = require('./MySQL');
const MongoDB = require('./MongoDB');

const Models = {
    init: async () => {
        //await MySql.sync(); //// nếu đã tồn tại không làm gì hết
        //await MySql.sync({ alter: true }); /// cập nhật thay đổi
        await MySql.sync({ force: true }); // xóa cũ tạo mới
    },
};

module.exports = Models;

