import { Response } from "express";

const errorResponseHandler = (error: any, response: Response) => {
    const {
        name, message: statusCode = 500
    } = error;

    if(name === 'PreconditionError') {
        response.status(400);
        response.send({errorMessage: error.message, clientError: true});
        return;
    }

    const parsedStatusCode = parseInt(statusCode, 10);

    const returnedStatusCode = !Number.isNaN(parsedStatusCode) ? parsedStatusCode : 500;

    response.sendStatus(returnedStatusCode);
};

export default errorResponseHandler;
