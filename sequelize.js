const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = new Sequelize(
    'Test',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    }
);

const MySql = { Sequelize, sequelize};

MySql.User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('userName');
            return rawValue ? rawValue : '';
        },
        set(value) {
            this.setDataValue('userName', value.toUpperCase());
        },
        unique: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    setterMethods: {
        fullName(value){
            const name = value.split(' ');
            const firstName = name[0];
            const lastName = name.slice(1).join(' ');
            this.setDataValue('firstName', firstName);
            this.setDataValue('lastName', lastName);
        }
    },
    getterMethods: {
        fullName(){
            return this.firstName + ' ' + this.lastName;
        }
    }
});

(async () => {
    //await MySql.sequelize.sync(); //// nếu đã tồn tại không làm gì hết
    //await sequelize.sync({ alter: true }); /// cập nhật thay đổi
    await MySql.sequelize.sync({ force: true }); // xóa cũ tạo mới
    ////////////Test create//////////////////
    let user = await MySql.User.create({ firstName: 'John',  lastName: 'Doe' , userName: 'JonDoe'});
    console.log(user.fullName);
    console.log(user.userName);

    //////////Test update ///////////////
    user.fullName = 'Someone Else';
    await user.save();

    await MySql.User.update({ lastName: 'Nghĩa' }, {
        where: {
            userName: 'JONDOE'
        }
    });
    console.log(user.firstName);
    console.log(user.lastName);
    ///////// Test find one //////////////
    let user1 = await MySql.User.findOne({ where : { userName: 'JONDOE'}});
    console.log(user1 instanceof MySql.User);
    console.log(user1.userName);
    console.log(user1.lastName);
    //////// Test find all///////////////
    let users = await MySql.User.findAll();
    console.log(users.every(user => user instanceof MySql.User));
    console.log("All users:", JSON.stringify(users));
    //////// Test destroy /////////////
    await MySql.User.destroy({
        where: {
            userName: 'JONDOE'
        }
    });
    let user2 = await MySql.User.findOne({ where : { userName: 'JONDOE'}});
    console.log(user2 instanceof MySql.User);
    /////// Test find order/group/skip/limit//////
    await MySql.User.create({ firstName: 'Test1',  lastName: 'Test1' , userName: 'Test1'});
    await MySql.User.create({ firstName: 'Test2',  lastName: 'Test2' , userName: 'Test2'});
    await MySql.User.create({ firstName: 'Test3',  lastName: 'Test3' , userName: 'Test3'});
    await MySql.User.create({ firstName: 'Test4',  lastName: 'Test4' , userName: 'Test4'});
    await MySql.User.create({ firstName: 'Test5',  lastName: 'Test5' , userName: 'Test5'});
    await MySql.User.create({ firstName: 'Test1',  lastName: 'Test6' , userName: 'Test6'});

    let a = 1;

    users = await MySql.User.findAll({
        where: {
            userName: { [Op.ne]: '' }
        },
        order: [
            ['userName', 'DESC'],
        ],
        // limit: 2,
        // offset: a
    });
    console.log("All users:", JSON.stringify(users));
    /////// Count ////////////////
    const count = await MySql.User.count({
        where: {
            id: {
                [Op.gte]: 1
            }
        }
    });
    console.log('Count id >= 1 : ', count );
    /////// Orther : Min , max, sum //////////////
    // const min = await MySql.User.min('age', {
    //     where: {
    //         age: {
    //             [Op.lte]: 10,
    //         }
    //     }
    // });
    // const max = await MySql.User.max('age', {
    //     where: {
    //         age: {
    //             [Op.lte]: 10,
    //         }
    //     }
    // });
    // const sum = await MySql.User.sum('age', {
    //     where: {
    //         age: {
    //             [Op.lte]: 10,
    //         }
    //     }
    // });
    ///////
})();
