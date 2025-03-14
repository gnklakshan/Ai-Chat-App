import { NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken";


export const createToken = (id, email, expiresIn ) => {
    const payload = { id, email }; // Object to be used for token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn : expiresIn }); // Create token
    return token; // Return the token
};


export const verifyToken = async(req:Request,Res:Response, nex:NextFunction) => {
    const token = req.signedCookies['${COOKIE_NAME}']; // Get token from cookie
    console.log(token);
}