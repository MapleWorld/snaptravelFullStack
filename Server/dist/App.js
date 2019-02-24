"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const home_1 = require("./presentation/home");
const execute_orders_1 = require("./presentation/execute-orders");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(cors()); // Automatically sets the header, and enable cross origin request
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.express.get('/', home_1.home);
        this.express.post('/execute-orders', execute_orders_1.executeOrders);
    }
}
exports.default = new App().express;
