"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeOrders = (req, res) => {
    console.log(req.body);
    req.body.hotelData.testData = "sdfsd";
    req.body.hotelData.userProfile = "aaxczxc";
    res.json(req.body.hotelData);
};
