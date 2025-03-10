import { NextFunction, Request, Response } from "express";
import user from "../models/user.js";
import { hash,compare } from "bcrypt";
import {createToken} from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers = async (req:Request, res: Response , next:NextFunction)=>{
    //get all users
    try {
        const users = await user.find(); //since we are using mongoose we can use find method to get all users [no pass parameters so retrn all users]
        return res.status(200).json({message: "ok",users}); //return all users in json format
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "Error",cause: error.message}); //return error message in json format
    }
};

export const userSignUp = async (req:Request, res: Response , next:NextFunction)=>{
    //user sign up
    try {
        const {name,email,password}= req.body; //get data from request body
        const UserExist = await user.findOne({email}); //check if user already exist
        if(UserExist) return res.status(401).json({message: "Error",cause: "User already exist"}); //return error message in json format
        const hashedPassword = await hash(password,10); //hash password using sha256
        const User = new user({name,email,password:hashedPassword}); //create new user object
        await User.save(); //save user to database


        //crete token and set in cookie

        res.clearCookie(COOKIE_NAME,{httpOnly:true, signed:true, domain :"localhost",path:'/'}); //clear previous old cookie
        const token = createToken(User._id.toString,User.email,"7d"); //create token
        //domain should need to change in production***********************************
        res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),httpOnly:true}); //set token in cookie , have to add cookie-parser middleware in app.ts before using this


        return res.status(201).json({message: "ok",name:User.name, email: User.email}); //return all users in json format
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "Error",cause: error.message}); //return error message in json format
    }
};

export const userLogin = async (req:Request, res: Response , next:NextFunction)=>{
    //user sign up
    try {
        const {email,password}= req.body; //get data from request body
        const User = await user.findOne({email}); //find user by email
        if(!User) {
            return res.status(401).json({message: "Error",cause: "User not found"}); //return error message in json format
            }
        //check if password is correct
        const isPasswordCorrect = await compare(password,User.password);
        if(!isPasswordCorrect) {
            return res.status(403).json({message: "Error! Invalid Password",cause: "Invalid password"}); //return error message in json format
        
        }

        res.clearCookie(COOKIE_NAME,{httpOnly:true, signed:true, domain :"localhost",path:'/'}); //clear previous old cookie


        const token = createToken(User._id.toString,User.email,"7d"); //create token

        //domain should need to change in production***********************************
        res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),httpOnly:true}); //set token in cookie , have to add cookie-parser middleware in app.ts before using this

        return res.status(200).json({message: "ok",name:User.name, email: User.email}); //return all users in json format
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "Error",cause: error.message}); //return error message in json format
    }
};