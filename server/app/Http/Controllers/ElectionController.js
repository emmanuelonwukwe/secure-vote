import ApiException from "../../Exceptions/ApiException.js";
import Election from "../../Models/Election.js";
import Controller from "./Controller.js";
import jwt from "jsonwebtoken";
import sql from "../../../config/db.js";
import bcrypt from "bcryptjs";

class ElectionController extends Controller {
  /**
   * This is the function to be called to create an election space
   * @param {object} data - The object of the election
   */
  static async createSpace(data) {
    // Validate the inputs
    if (
      !Object.prototype.hasOwnProperty.call(data, "title") ||
      data.title === ""
    ) {
      throw new ApiException("Title field is required", 400);
    }

    if (
      !Object.prototype.hasOwnProperty.call(data, "description") ||
      data.description === ""
    ) {
      throw new ApiException("Description field is required", 400);
    }

    if (
        !Object.prototype.hasOwnProperty.call(data, "candidates") ||
        data.candidates === ""
      ) {
        throw new ApiException("Candidates field is required", 400);
      }

    // Create an election instance
    const election = new Election();

    // Check if this user exists in the system
    if (await user.modelExists(sql`title = ${data.title}`)) {
      throw new ApiException("Invalid details supplied");
    }

    // Get the user password from the databas
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

    return token;
  }
}

export default ElectionController;
