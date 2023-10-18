import ApiException from "../../Exceptions/ApiException.js";
import User from "../../Models/User.js";
import Controller from "./Controller.js";
import jwt from "jsonwebtoken";
import sql from "../../../config/db.js";
import bcrypt from "bcryptjs";
import app from "../../../app.js";

class LoginController extends Controller {
  /**
   * This is the function to be called for login action
   * @param {object} data - The object of the user auth data to be checked
   */
  static async authenticate(data) {
    // Validate the inputs
    if (
      !Object.prototype.hasOwnProperty.call(data, "email") ||
      data.email === ""
    ) {
      throw new ApiException("Email field is required", 400);
    }

    if (
      !Object.prototype.hasOwnProperty.call(data, "password") ||
      data.password === ""
    ) {
      throw new ApiException("Password field is required", 400);
    }

    // Create a user instance
    const user = new User();

    // Check if this user exists in the system
    if (!await user.modelExists(sql`email = ${data.email}`)) {
      throw new ApiException("Invalid details supplied");
    }

    // Get the user password from the database
    const userRow = await user.where(sql`email = ${data.email}`);
    const userHashedPassword = userRow[0].password;

    const passwordMatched = await bcrypt.compare(data.password, userHashedPassword);


    // Check if the email and the password match
    const userExists = await user.modelExists(
      sql`email = ${data.email}`
    );

    if (!userExists || !passwordMatched) {
      throw new ApiException("Invalid email or password", 409);
    }

    // Emit the logged in event
    // app.on("registered", () => { console.log("Logged in success")});
    // app.emit("registered");

    // Authenticated the user to db
    const authUser = userRow[0];

    // Sign the authenticated user and return the token
    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: authUser,
      },
      secretKey
    );

    return { token, user: authUser };
  }
}

export default LoginController;
