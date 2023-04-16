'use strict'

const UserRouter = require('./UserRouter');

const router = (app) => {
    app.use('/user', UserRouter);
    app.get('/', (req, res) => {
        res.status(200).send({
            Message: 'Wellcom Server Nghia'
        });
    });
};

module.exports = router;