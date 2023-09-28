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
    return jwt.verify(token, process.env.JWT_SECRET, function (err, payload) {
      if (err) {
        return {};
      }

      // return the user payload
      return payload;
    });
  }
}

export default TokenController;
