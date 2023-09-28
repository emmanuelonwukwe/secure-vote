import ApiException from "../../Exceptions/ApiException.js";
import Election from "../../Models/Election.js";
import Controller from "./Controller.js";
import jwt from "jsonwebtoken";
import sql from "../../../config/db.js";
import bcrypt from "bcryptjs";
import AuthController from "./AuthController.js";
import User from "../../Models/User.js";

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

    if (data.visibility === "private") {
      if (data.voting_requirements === null || data.voting_requirements == "") {
        throw new ApiException(
          "You must provide the requirements for private elections",
          400
        );
      }
    }

    // Create an election instance
    const election = new Election();

    // The authenticated user
    const authController = new AuthController(token);
    const authUserId = authController.getId();

    // Convert the data candidates and voting requirements keys to array
    let candidatesArray = data.candidates;
    candidatesArray = candidatesArray.trim();
    candidatesArray = candidatesArray.replace(/\s+/g, "");
    candidatesArray = candidatesArray.split(",");
    data.candidates = candidatesArray;

    // Check if the candidates are valid securevote users
    const user = new User();

    for (const candidateEmail of candidatesArray) {
      if (!(await user.modelExists(sql`email = ${candidateEmail}`))) {
        throw new ApiException(
          `This candidate '${candidateEmail}' is not a member of secure vote`,
          403
        );
      }
    }

    if (data.voting_requirements && data.voting_requirements !== null) {
      let requirementsArray = data.voting_requirements;
      requirementsArray = requirementsArray.split(",");
      data.voting_requirements = requirementsArray;
    }

    // Add the missing keys to the data
    data.creator_id = authUserId;
    data.status = "open";

    const newElection = await election.create(data);

    return true;
  }

  // This function retuns the election spaces of the authenticated user
  static async getSpaces(token) {
    // The authenticated user
    const authController = new AuthController(token);
    const authUserId = authController.getId();

    // Create an election instance
    const election = new Election();

    // Fetch the data from the db
    const electionSpaces = await election.where(
      sql`creator_id = ${authUserId}`
    );

    return electionSpaces;
  }

  /**
   * This function updates the user election with the specified id from the database
   * @param {object} data - The object of the columns to be updated
   * */ 
  static async update(data, id, token) {

    if (!data || Object.keys(data).length < 1) {
      throw new ApiException("No data edited to be updated");
    }

    if (data.visibility === "private") {
      if (data.voting_requirements === null || data.voting_requirements == "") {
        throw new ApiException(
          "You must provide the requirements for private elections",
          400
        );
      }
    }

    // Create an election instance
    const election = new Election();

    // The authenticated user
    const authController = new AuthController(token);
    const authUserId = authController.getId();

    // Convert the data candidates and voting requirements keys to array
    let candidatesArray = data.candidates;
    candidatesArray = candidatesArray.trim();
    candidatesArray = candidatesArray.replace(/\s+/g, "");
    candidatesArray = candidatesArray.split(",");
    data.candidates = candidatesArray;

    // Check if the candidates are valid securevote users
    const user = new User();

    for (const candidateEmail of candidatesArray) {
      if (!(await user.modelExists(sql`email = ${candidateEmail}`))) {
        throw new ApiException(
          `This candidate '${candidateEmail}' is not a member of secure vote`,
          403
        );
      }
    }

    if (data.voting_requirements && data.voting_requirements !== null) {
      let requirementsArray = data.voting_requirements;
      requirementsArray = requirementsArray.split(",");
      data.voting_requirements = requirementsArray;
    }

    // Fetch the data from the db
    await election.update(data, sql`creator_id = ${authUserId} AND id = ${id}`);

    return true;
  }

  // This function deletes the user election with the specified id from the database
  static async delete(id, token) {
    // The authenticated user
    const authController = new AuthController(token);
    const authUserId = authController.getId();

    // Create an election instance
    const election = new Election();

    // Fetch the data from the db
    await election.delete(sql`creator_id = ${authUserId} AND id = ${id}`);

    return true;
  }
}

export default ElectionController;
