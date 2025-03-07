//all application code handle by this app.ts file

import express from 'express';
import {config} from 'dotenv';
import moragan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';

config(); //load environment variables from .env file

const app = express(); //create express app

// Middleware
app.use(express.json()); //parse json data from request body
app.use(cookieParser(process.env.COOKIE_SECRET)); //parse cookies from request


//no need for this middleware in production , only for development
if(process.env.NODE_ENV === 'development'){
    app.use(moragan('dev')); //log http requests in console
}

//define routes  //domain/api/v1 then transfer to appRouter to handle
app.use("/api/v1", appRouter); //all routes start with /api/v1




export default app;