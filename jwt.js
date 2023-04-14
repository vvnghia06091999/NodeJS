const jwt = require('jsonwebtoken');

const token = jwt.sign({
    id: 1,
    userName: 'Test'
}, 'Ahihi', {
    expiresIn: '1d',
    algorithm: 'HS256'
});

try {
    const data = jwt.verify(token, 'Ahihi');
    console.log(data);
} catch (error) {
    console.error(error);
}
