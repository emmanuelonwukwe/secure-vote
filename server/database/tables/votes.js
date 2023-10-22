/**
 * 
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function votesCreateTableQry(sql) {
    await sql`CREATE TABLE IF NOT EXISTS votes(
        id SERIAL PRIMARY KEY,
        voter_id INTEGER NOT NULL,
        election_id INTEGER NOT NULL,
        supported_candidate_id INTEGER NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT),
        CONSTRAINT fk_user FOREIGN KEY(voter_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_election FOREIGN KEY(election_id) REFERENCES elections (id) ON DELETE CASCADE,
        CONSTRAINT fk_candidate_supported FOREIGN KEY(supported_candidate_id) REFERENCES users (id) ON DELETE CASCADE
    )`;
}

export default votesCreateTableQry;