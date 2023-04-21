import express from 'express';

const middleware = express.Router();

middleware.get('/*', (request, response, next) => {
    response.set('Content-Type', 'application/json');

    next();
});

export default middleware;
