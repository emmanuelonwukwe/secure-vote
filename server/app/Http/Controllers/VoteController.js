import Controller from "./Controller.js";
import sql from "../../../config/db.js";
import Vote from "../../Models/Vote.js";
import AuthController from "./AuthController.js";
import ApiException from "../../Exceptions/ApiException.js";

class VoteController extends Controller {
  /**
   * This is called when a user casts his vote
   * @param {object} data - The object containing the posted data contining the supported_id and supported candidate id
   * and the election id
   */
  static async castVote(data) {
    const supportedCandidateId = data.supported_candidate_id;
    const electionId = data.election_id;
    const token = data.token;

    const vote = new Vote();
    const authController = new AuthController(token);
    const authUserId = authController.getId();

    // Check if the user has voted for this election before
    if (
      await vote.modelExists(
        sql`voter_id = ${authUserId} AND election_id = ${electionId}`
      )
    ) {
      throw new ApiException(
        "You have already voted for this election and can not vote again"
      );
    }

    // Check if the election is public or private and if private, the user had fulfuled the requirements

    await vote.create({
      voter_id: authUserId,
      election_id: electionId,
      supported_candidate_id: supportedCandidateId,
    });

    return true;
  }

  /**
   * This function gets the total vote count for a candidate in a particular election
   */
  async countVotes(candidate_id, election_id) {
    const vote = new Vote();
    const voteCount = await vote.count(
      sql`supported_candidate_id = ${candidate_id} AND election_id = ${election_id}`
    );

    return voteCount;
  }
}

export default VoteController;
