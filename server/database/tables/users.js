/**
 *
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function usersCreateTableQry(sql) {
  await sql`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255),
        role VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        profile_image TEXT DEFAULT NULL,
        password VARCHAR(255) NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT)
    )`;

  // Add a unique constraint to the 'email' column
  await sql`ALTER TABLE users
      ADD CONSTRAINT unique_email UNIQUE (email)`;

  // Add an index to the 'email' column for improved lookup speed
  await sql`CREATE INDEX email_index ON users (email)`;
}

export default usersCreateTableQry;
