import ApiException from "../../Exceptions/ApiException.js";
import Election from "../../Models/Election.js";
import Controller from "./Controller.js";
import jwt from "jsonwebtoken";
import sql from "../../../config/db.js";
import bcrypt from "bcryptjs";
import UserController from "./UserController.js";

class ElectionController extends Controller {
  /**
   * This is the function to be called to create an election space
   * @param {object} data - The object of the election
   * @param {string} token - The token the user sent along the request header
   */
  static async createSpace(data, token) {
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

    // The authenticated user
    const userController = new UserController(token);
    const authUserId = userController.getId();

    // Check if this user has this same election title in the system
    if (await user.modelExists(sql`title = ${data.title} AND id = ${authUserId}`)) {
      throw new ApiException("Invalid details supplied");
    }

    // Convert the candidates and voting requirements to array
    data.candidates = data.candidates.split(",")

    if (data.voting_requirements !== null) {
      data.voting_requirements = data.voting_requirements.split(",");
    }

    const newElection = await election.create(data);

    return true;
  }
}

export default ElectionController;
