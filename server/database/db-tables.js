// You must register all the db tables here as the models reference it to execute queries
const DBTables = {
    users: ["first_name", "last_name", "email", "phone", "role", "status", "profile_image", "password", "date_created", "time_created"],
    reset_passwords: ["user_id", "reset_key", "date_created", "time_created"],
    elections: ["creator_id", "title", "description", "visibility", "voting_requirements", "candidates", "status", "date_created", "time_created"],
    votes: ["voter_id", "election_id", "supported_candidate_id", "date_created", "time_created"],
    eligible_voters: ["user_id", "election_id", "date_created", "time_created"],
}

export default DBTables;