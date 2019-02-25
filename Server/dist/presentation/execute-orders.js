"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeOrders = (req, res) => {
    // Contains data sent in
    console.log(req.body);
    console.log(req.app.settings.hotelData);
    let matchingHotels = req.app.settings.hotelData.filter(hotel => hotel.city === req.body.city);
    console.log("Filtered");
    console.log(matchingHotels);
    res.json(matchingHotels);
};
