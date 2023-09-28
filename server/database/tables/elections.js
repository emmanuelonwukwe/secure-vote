/**
 *
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function electionsCreateTableQry(sql) {
  await sql`CREATE TABLE IF NOT EXISTS elections(
        id SERIAL PRIMARY KEY,
        creator_id INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        visibility VARCHAR(255) NOT NULL,
        voting_requirements JSONB DEFAULT NULL,
        candidates JSONB DEFAULT NULL,
        status VARCHAR(255) NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT),
        CONSTRAINT fk_user FOREIGN KEY(creator_id) REFERENCES users(id) ON DELETE CASCADE
    )`;

  // Add an index to the 'email' column for improved lookup speed
  await sql`CREATE INDEX creator_id_index ON elections (creator_id)`;
}

export default electionsCreateTableQry;
