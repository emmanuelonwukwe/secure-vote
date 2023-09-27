import BaseMiddleware from "./BaseMiddleware.js";
import ApiException from "../../Exceptions/ApiException.js";

/**
 * The middleware only for admin role
 */
class AdminOnlyMiddleware extends BaseMiddleware {
    role = this.getRole();

    getRole() {
        return "admin";
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