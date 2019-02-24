import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { home } from './presentation/home';
import { executeOrders } from './presentation/execute-orders';

class App {
    express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(cors());            // Automatically sets the header, and enable cross origin request
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
  
    private routes(): void {     
        this.express.get('/', home);  
        this.express.post('/execute-orders', executeOrders); 
    }
} 
  
export default new App().express;
