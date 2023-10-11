import BaseMiddleware from "./BaseMiddleware.js";
import ApiException from "../../Exceptions/ApiException.js";
import AuthController from "../Controllers/AuthController.js";

/**
 * The middleware only for admin role
 */
class AdminOnlyMiddleware extends BaseMiddleware {
  // Assign this as a callback to the route that needs this middleware
  static handle(req, res, next) {
    try {
      //const $this = new AdminOnlyMiddleware();

      // The authenticated user
      //const authController = new AuthController(req.headers.token);

      const authUserRole = 'admin';//authController.getRole();

      if (authUserRole !== "admin") {
        throw new ApiException("You are not permitted to access this by admin");
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default AdminOnlyMiddleware;
