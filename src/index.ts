import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import mongoose from 'mongoose';

import middleware from './middleware';

require('dotenv').config();

const app = express();

const {
    env: { PORT, CLIENT_BASE_URL, DB_CONNECTION_STRING='', DB_NAME='person', DB_COLLECTION='employee' }
} = process;

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(middleware);

const start = async () => {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log('Connected to DB');
        const server = app.listen(PORT || 5100, () => {
            console.log(`Started server on ${PORT || 5100}`)
        });
    }catch (error) {
        console.log(error);
        // process.exit(1);
    }
}

start();