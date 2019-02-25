import * as http from 'http';
import * as debug from 'debug';
import * as express from 'express';
import { hotelData } from './infrastructure/hotelData';
import { home } from './presentation/home';
import { executeOrders } from './presentation/execute-orders';


const DEFAULT_PORT = 3000;

export default class Server {
    app: any;
    server: any;
    port: number|string = DEFAULT_PORT;
    constructor(app: express.Application) {
        this.port = this.normalizePort(this.port);
        app.set('hotelData', hotelData);
        this.app = app.set('port', this.port);
        this.server = http.createServer(app);
    }

    start(): void {
        this.server.listen(this.port);
        this.server.on('error', this.onError);
        this.server.on('listening', this.onListening);
        console.log('Server started');
    }

    private onListening = (): void => {
        const addr = this.server.address();
        const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        debug(`Listening on ${bind}`);
        console.log('Listening on ' + bind);
    }

    private normalizePort(val: number|string): number|string {
        const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port)) return val;
        else return port;
    } 

    private onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        const bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch(error.code) {
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
