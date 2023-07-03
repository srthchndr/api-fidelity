import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors';

import middleware from './middleware';

require('dotenv').config();

export const app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(middleware);
