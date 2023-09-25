import Controller from "./Controller.js";
import jwt from "jsonwebtoken";

class TokenController extends Controller {
    constructor(){
        super();
    }

  // This verifies the token on the request header
  static verifyToken(token) {
    if (!token) {
      return {};
    }

    // verify a token symmetric
    return jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return {};
      }

      // return the user
      return user;
    });
  }
}

export default TokenController;
