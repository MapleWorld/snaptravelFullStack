import { Request, Response, NextFunction } from "express";

export const executeOrders = (req: Request, res: Response) => {

    // Contains data sent in
    console.log(req.body);
    
    req.body.city =  "sdfsd";
    req.body.checkin = "aaxczxc";


    res.json(req.body.hotelData);
};













