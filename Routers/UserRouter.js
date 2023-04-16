const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const errorHandler = require('../Middlewares/errorHandler');

router.use(errorHandler);

router.post('/signup', UserController.signUp);

router.get('/', (req, res) => {
    res.status(200).send({
        Message: 'Wellcom to Controller User'
    });
});

module.exports = router;
