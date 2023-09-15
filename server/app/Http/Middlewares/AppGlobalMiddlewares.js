import express from "express";
import cors from "cors";
import allowedOrigins from "../../../config/cors.js"

/**
 * The global app middlewares are registered here
 */
class AppGlobalMiddlewares{
    constructor(){
        const app = express();
        app.use(express.json());
        app.use(cors({ origin: [...allowedOrigins] }));
    }
}

export default AppGlobalMiddlewares;