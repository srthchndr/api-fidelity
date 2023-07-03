import mongoose from "mongoose";


export const connectToDB = async () => {
    const {
        env: { DB_CONNECTION_STRING='', DB_NAME='person'}
    } = process;

    try {
        await mongoose.connect(`${DB_CONNECTION_STRING}`);
        console.log('Connected to DB', DB_CONNECTION_STRING, DB_NAME);
    }catch (error) {
        console.log("Mongo didnt connect", error);
        // process.exit(1);
    } 
}