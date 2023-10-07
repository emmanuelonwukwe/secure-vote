import ApiException from "../../Exceptions/ApiException.js";
import BaseMiddleware from "./BaseMiddleware.js";
import TokenController from "../Controllers/TokenController.js";

class MustVerifyTokenMiddleware extends BaseMiddleware {
    // Assign this as a callback to the route that needs this middleware
    static handle(req, res, next) {
        try {
            const $this = new MustVerifyTokenMiddleware();

            // Get the token in the request
            const token = req.headers.token;

            const payload = TokenController.verifyToken(token);

            if (Object.keys(payload).length < 1) {
                throw new ApiException("Invalid or expired token sent");
            }

            next();
        } catch (error) {
            next(error);
        }
    }
}

export default MustVerifyTokenMiddleware;