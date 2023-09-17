import BaseMiddleware from "./BaseMiddleware.js";
import ApiException from "../../Exceptions/ApiException.js";
import handleCaughtErrorRes from "../../../helpers/caught-error-handler.js";

/**
 * The global app middlewares are registered here
 */
class AdminOnlyMiddleware extends BaseMiddleware {
    static role = "user";

    // Assign this as a callback to the route that needs this middleware
    handle(req, res, next) {
        try {
            if (AdminOnlyMiddleware.role !== "admin") {
                throw new ApiException("You are not permitted to access this by admin");
            }

            next();
        } catch (error) {
            handleCaughtErrorRes(error, res);
        }
    }
}

export default AdminOnlyMiddleware;