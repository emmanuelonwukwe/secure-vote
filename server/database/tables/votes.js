/**
 * 
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function votesCreateTableQry(sql) {
    await sql`CREATE TABLE IF NOT EXISTS votes(
        id SERIAL PRIMARY KEY,
        voter_id INTEGER NOT NULL,
        election_id VARCHAR(255) NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT),
        CONSTRAINT fk_user FOREIGN KEY(voter_id) REFERENCES users(id),
        CONSTRAINT fk_election FOREIGN KEY(election_id) REFERENCES elections (id)
    )`;
}

export default votesCreateTableQry;