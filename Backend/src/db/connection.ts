import {connect,disconnect} from 'mongoose';


async function connectToDatabase() {
try{
    await connect(process.env.MONGODB_URL);
}catch(err){
    console.log(err);
    throw new Error('Database connection failed : MongoDB not connected!');

}}

async function disconnectFromDatabase() {
    try{
        await disconnect();
    }catch(err){
        console.log(err);
        throw new Error('Database disconnection failed : MongoDB not disconnected!');
    
    }}

    export {connectToDatabase,disconnectFromDatabase};