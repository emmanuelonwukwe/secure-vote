import BaseMiddleware from "./BaseMiddleware.js";
import allowedOrigins from "../../../config/cors.js"
import AdminOnlyMiddleware from "./AdminOnlyMiddleware.js";
import cors from "cors";

/**
 * The global app middlewares are registered here
 */
class SetAppGlobalMiddlewares extends BaseMiddleware{
    constructor(app){
        super(app);
        app.use(this.express.json());
        app.use(cors({ origin: [...allowedOrigins] }));
        //app.use(AdminOnlyMiddleware.handle)
    }
}

export default SetAppGlobalMiddlewares;