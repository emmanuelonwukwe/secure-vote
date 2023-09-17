import BaseMiddleware from "./BaseMiddleware.js";
import ApiException from "../../Exceptions/ApiException.js";

/**
 * The global app middlewares are registered here
 */
class AdminOnlyMiddleware extends BaseMiddleware {
    role = this.getRole();

    constructor() {
        super();
    }

    getRole() {
        return "user";
    }

    // Assign this as a callback to the route that needs this middleware
    static handle(req, res, next) {
        const $this = new AdminOnlyMiddleware();

        if ($this.role !== "admin") {
            throw new ApiException("You are not permitted to access this by admin");
        }

        next();
    }
}

export default AdminOnlyMiddleware;