import express from 'express';

import API from './API';

const middleware = express.Router();

middleware.get('/*', (request, response, next) => {
    response.set('Content-Type', 'application/json');

    next();
});

middleware.use('/api', ...API);

export default middleware;
