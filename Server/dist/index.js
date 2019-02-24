"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const serverIO = require("socket.io");
const App_1 = require("./App");
const Server_1 = require("./Server");
debug('ts-express:server');
const server = new Server_1.default(App_1.default);
server.start();
// Socket
const io = serverIO(server.server);
io.on('connection', function (client) {
    console.log('A user connected');
    client.on('disconnect', function () {
        console.log('A user disconnected');
    });
    client.on('fillOrder', function (fileData) {
        console.log('Server fillOrder');
        io.emit('fillOrder', fileData);
    });
});
