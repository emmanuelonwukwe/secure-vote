import express from "express";

/**
 * The app middlewares parent to be inherited from by all the middlewares
 * @param {object} app - The express app in the server entry point
 */
class BaseMiddleware {
    constructor(app) {
        this.express = express;
        this.app = app;
    }

    /**
     * The method that a middleware implements to define its middleware function to be access as a callback to route MW
    * Note: `this` keyword is undefined in this function bc it will be used as a callback. 
    * You can use static members or instantiate the class in the function
    * before accessing the class members as this will always be called as a callback
    * 
    */
    static handle(req, res, next) {
        try {
        // code
        next()
        } catch (error) {
            // Redirect execution to the middlware error handler by calling next with arg passed
            next(error);
        }
    }
}

export default BaseMiddleware;