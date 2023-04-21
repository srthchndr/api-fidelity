import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import { connectToDatabase } from './db';

//import middleware from './middleware';

require('dotenv').config();

const app = express();

const {
    env: { PORT, CLIENT_BASE_URL }
} = process;

console.log(PORT, CLIENT_BASE_URL, "THIGGG")

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: CLIENT_BASE_URL
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const server = app.listen(5100, () => {
    console.log('This is server in 5100')
});

connectToDatabase();