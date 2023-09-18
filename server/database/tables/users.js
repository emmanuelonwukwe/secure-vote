/**
 * 
 * @param {postgres.TransactionSql} sql - This should be transaction sql
 */
async function usersCreateTableQry(sql){
    await sql`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255),
        role VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        date_created TIMESTAMP DEFAULT NOW(),
        time_created integer DEFAULT CAST(EXTRACT(epoch FROM NOW()) AS INT)
    )`;
}

export default usersCreateTableQry;