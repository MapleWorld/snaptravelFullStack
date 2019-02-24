"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const DEFAULT_PORT = 3000;
class Server {
    constructor(app) {
        this.port = DEFAULT_PORT;
        this.onListening = () => {
            const addr = this.server.address();
            const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
            debug(`Listening on ${bind}`);
            console.log('Listening on ' + bind);
        };
        this.port = this.normalizePort(this.port);
        this.app = app.set('port', this.port);
        this.server = http.createServer(app);
    }
    start() {
        this.server.listen(this.port);
        this.server.on('error', this.onError);
        this.server.on('listening', this.onListening);
        console.log('Server started');
    }
    normalizePort(val) {
        const port = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port))
            return val;
        else
            return port;
    }
    onError(error) {
        if (error.syscall !== 'listen')
            throw error;
        const bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}
exports.default = Server;
