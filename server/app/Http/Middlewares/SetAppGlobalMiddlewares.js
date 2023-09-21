import BaseMiddleware from "./BaseMiddleware.js";
import allowedOrigins from "../../../config/cors.js"
import AdminOnlyMiddleware from "./AdminOnlyMiddleware.js";
import cors from "cors";
import { xss } from 'express-xss-sanitizer';

/**
 * The global app middlewares are registered here
 */
class SetAppGlobalMiddlewares extends BaseMiddleware{
    constructor(app){
        super(app);
        // Parse json to req.body
        app.use(this.express.json());
        app.use(this.express.urlencoded({extended: true}));

        // Bypass xss attack from req.body, req.query, req.headers and req.params
        app.use(xss());

        // Set the cross origin policy
        app.use(cors({ origin: [...allowedOrigins] }));
        //app.use(AdminOnlyMiddleware.handle)
    }
}

export default SetAppGlobalMiddlewares;