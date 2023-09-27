import ApiException from "../../Exceptions/ApiException.js";
import BaseMiddleware from "./BaseMiddleware.js";
import TokenController from "../Controllers/TokenController.js";

class MustVerifyTokenMiddleware extends BaseMiddleware {
    role = this.getRole();

    getRole() {
        return "admin";
    }

    // Assign this as a callback to the route that needs this middleware
    static handle(req, res, next) {
        const $this = new MustVerifyTokenMiddleware();

        // Get the token in the request
        const token = req.headers.token;

        const payload = TokenController.verifyToken(token);

        if (Object.keys(payload).length < 1) {
            throw new ApiException("Invalid or expired token sent");
        }

        next();
    }
}

export default MustVerifyTokenMiddleware;