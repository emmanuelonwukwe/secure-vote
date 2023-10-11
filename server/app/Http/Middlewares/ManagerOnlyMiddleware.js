import BaseMiddleware from "./BaseMiddleware.js";
import ApiException from "../../Exceptions/ApiException.js";
import AuthController from "../Controllers/AuthController.js";

/**
 * The middleware only for admin role
 */
class ManagerOnlyMiddleware extends BaseMiddleware {

  // Assign this as a callback to the route that needs this middleware
  static handle(req, res, next) {
    try {
      //const $this = new ManagerOnlyMiddleware();

      // The authenticated user
      const authController = new AuthController(req.headers.token);

      const authUserRole = authController.getRole();

      if (authUserRole !== "manager") {
        throw new ApiException("Only electoral managers are permitted to access this resource");
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default ManagerOnlyMiddleware;
