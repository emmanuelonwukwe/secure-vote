import BaseMiddleware from "./BaseMiddleware.js";
import allowedOrigins from "../../../config/cors.js"


/**
 * The global app middlewares are registered here
 */
class SetAppGlobalMiddlewares extends BaseMiddleware{
    constructor(){
        super();
        this.app.use(this.express.json());
        this.app.use(this.cors({ origin: [...allowedOrigins] }));
    }
}

export default SetAppGlobalMiddlewares;