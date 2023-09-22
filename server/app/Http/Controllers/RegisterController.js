import { migrateUp, migrateDown } from "../../../database/migrate-tables.js";
import ApiException from "../../Exceptions/ApiException.js";
import User from "../../Models/User.js";
import Controller from "./Controller.js";
import jwt from 'jsonwebtoken';
import sql from "../../../config/db.js";

class RegisterController extends Controller {
  /**
   *
   * @param {object} data - The object of the user data to be inserted to the database
   */
  static async register(data) {
    // Validate the inputs
    if (!Object.prototype.hasOwnProperty.call(data, "first_name") || data.first_name === '') {
        throw new ApiException("First name field is required", 400);
    }

    if (!Object.prototype.hasOwnProperty.call(data, "last_name") || data.last_name === '') {
        throw new ApiException("Last name field is required", 400);
    }

    if (!Object.prototype.hasOwnProperty.call(data, "email") || data.email === '') {
        throw new ApiException("Email field is required", 400);
    }

    if (!Object.prototype.hasOwnProperty.call(data, "password") || data.password === '') {
        throw new ApiException("Password field is required", 400);
    }

    if (!Object.prototype.hasOwnProperty.call(data, "password_confirmation") || data.password_confirmation === '') {
        throw new ApiException("Password Confirmation field is required", 400);
    }

    // Check the password and its confirmation
    if (data.password !== data.password_confirmation) {
        throw new ApiException("Password and confirm password do not match", 400);
    }

    if (!/[A-Z]+/.test(data.password)) {
        throw new ApiException("Password must contain at least a capital letter", 400);
    }
    if (!/[#@\$%\|&]+/.test(data.password)) {
        throw new ApiException("Password must contain at least a special character in this list `# @ $ % | &`", 400);
    }

    // Create a user instance 
    const user = new User();

    // Check if the email already exists in the database
    const userExists = await user.modelExists(`email=${data.email}`);

    if (userExists) {
        throw new ApiException("User email already exists", 409);
    }

    // remove the unwanted field from the data
    delete data.password_confirmation;

    // Add the status key 
    data.status = 'active';

    // Register the user to db
    const newUser = await user.create(data);

    // Sign the new user and return the token
    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign(newUser[0], secretKey);

    return token
  }

  static async testApi(){
    const user = new User();
    let emma = "a@a.co";
    const response = await user.max("id", sql`1=1`);

    return response;
  }
}

export default RegisterController;
