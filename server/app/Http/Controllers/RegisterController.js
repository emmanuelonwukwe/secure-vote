import { migrateUp, migrateDown } from "../../../database/migrate-tables.js";
import User from "../../Models/User.js";
import Controller from "./Controller.js";

class RegisterController extends Controller {
  /**
   *
   * @param {object} data - The object of the user data to be inserted to the database
   */
  static async register(data) {
    const user = new User();

    // remove the unwanted field from the data
    delete data.password_confirmation;

    // Register the user to db
    await user.create(data);
  }
}

export default RegisterController;
