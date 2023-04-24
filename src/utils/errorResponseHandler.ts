import { Response } from "express";

const errorResponseHandler = (error: any, response: Response) => {
    const {
        message: statusCode = 500
    } = error;

    const parsedStatusCode = parseInt(statusCode, 10);

    const returnedStatusCode = !Number.isNaN(parsedStatusCode) ? parsedStatusCode : 500;

    console.log({
        error,
        response
    });

    response.sendStatus(returnedStatusCode);
};

export default errorResponseHandler;
