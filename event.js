const event = require('events');

const eventEmit = new event.EventEmitter();

eventEmit.on('Call', (text) => {
    console.log(text);
});

eventEmit.emit('Call', 'Hihi');