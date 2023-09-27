/**
 * 
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function resetPasswordsCreateTableQry(sql) {
    await sql`CREATE TABLE IF NOT EXISTS reset_passwords(
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        reset_key VARCHAR(255) NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT),
        CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`;
}

export default resetPasswordsCreateTableQry;