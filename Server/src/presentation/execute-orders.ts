import { Request, Response, NextFunction } from "express";

export const executeOrders = (req: Request, res: Response) => {
    // Contains data sent in
    console.log(req.body);
    console.log(req.app.settings.hotelData);
    let matchingHotels = req.app.settings.hotelData.filter(hotel => hotel.city === req.body.city);
    console.log("Filtered");
    console.log(matchingHotels);
    res.json(matchingHotels);
};













