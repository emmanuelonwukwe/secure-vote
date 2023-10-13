/**
 * 
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function eligibleVotersCreateTableQry(sql) {
    await sql`CREATE TABLE IF NOT EXISTS eligible_voters(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        election_id INTEGER NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT),
        CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
        CONSTRAINT fk_election FOREIGN KEY(election_id) REFERENCES elections (id) ON DELETE CASCADE
    )`;
}

export default eligibleVotersCreateTableQry;