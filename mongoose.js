const mongoose = require('mongoose');
const Schema = mongoose.Schema;

(async () => {
    // await mongoose.connect('mongotest://127.0.0.1:27017/Test').then(()=>{
    //     console.log('Connect');
    // }).catch(err => {
    //     console.log(err);
    // });

    const test = mongoose.createConnection('mongodb://127.0.0.1:27017/Test1');
    test.on('error', (err) => {
        console.log(err);
    });

    const User = test.model('User', new Schema({
        userName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2
        },
        fistName: {
            type: String,
            trim: true,
        },
        lastName:{
            type: String,
            trim: true,
        }
    }));

    await User.create({ userName: 'Test', fistName: 'Vo', lastName: 'Van Nghia'});
    const user1 = await User.findOne({userName: 'Test'});
    user1.lastName = 'Nghia';
    await user1.save().then(() => {
        console.log('save');
    });

    const users = await User.find();
    console.log(users);

    await User.deleteMany({ userName: 'Test'});

    await test.close();

    // mongoose.disconnect().then(() => {
    //     console.log('disconnect');
    // })
})();