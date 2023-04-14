const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded);

const middleware = async (req, res, next) => {
    next();
};

app.use(middleware);

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

const server = http.createServer(app);

const socketIo = new Server(server, {
    cors: {
        origin: "*",
        optionsSuccessStatus: 200
    }
});

socketIo.on('connection', (socket) => {
    console.log('New client connected' + socket.id);

    socket.emit("getId", socket.id);

    socket.on('sendDataToServer', data => {
       socketIo.emit(`sendDataToClient${socket.id}`, data); 
    });

    socket.on('disconnect', () => {
        console.log('Client disconnect' + socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server start port 3000');
});