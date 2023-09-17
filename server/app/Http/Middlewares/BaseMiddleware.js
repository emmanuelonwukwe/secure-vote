import express from "express";
import cors from "cors";
import handleCaughtErrorRes from "../../../helpers/caught-error-handler.js";

/**
 * The app middlewares parent to be inherited from by all the middlewares
 */
class BaseMiddleware {
    constructor() {
        this.express = express;
        this.cors = cors;
        this.app = express();
    }

    // The method that a middleware implements to define its middleware function to be access as a callback to route MW
    handle(req, res, next) {
        try {
            // code
            next()
        } catch (error) {
            handleCaughtErrorRes(error, res);
        }
    }
}

export default BaseMiddleware;