import * as http from 'http';
import * as debug from 'debug';
import * as serverIO from 'socket.io';

import App from './App';
import Server from './Server';

debug('ts-express:server');
const server = new Server(App);
server.start();

// Socket
const io = serverIO(server.server);
io.on('connection', function(client){
    console.log('A user connected');
    client.on('disconnect', function(){
        console.log('A user disconnected');
    });
    client.on('fillOrder', function(fileData){
        console.log('Server fillOrder');
        io.emit('fillOrder', fileData);
    });
});













