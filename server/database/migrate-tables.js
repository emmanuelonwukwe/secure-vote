import sql from "../config/db.js";
import DBTables from "./db-tables.js";
import usersCreateTableQry from "./tables/users.js";
import resetPasswordsCreateTableQry from "./tables/reset-password.js";
import electionsCreateTableQry from "./tables/elections.js";
import votesCreateTableQry from "./tables/votes.js";
import eligibleVotersCreateTableQry from "./tables/eligible-voters.js";

/**
 * This function is called to migrate the tables to the db.
 * Note: Register the primary tables first before the referencing tables
 */ 
async function migrateUp() {
    await sql.begin( async (sql) => {
        // First query of the transaction
       await usersCreateTableQry(sql);

       // This query creates the elections table
       await electionsCreateTableQry(sql);

       // The query creates eligible voters table
       await eligibleVotersCreateTableQry(sql);
       
       // This query creates the votes table
       await votesCreateTableQry(sql);

       // This creates the reset passwords table
       await resetPasswordsCreateTableQry(sql);
    });

    return true;
}

// This function drops all the tables from the database when called
function migrateDown() {
    Object.entries(DBTables).forEach(async ([tablename, val]) => {
        await sql`DROP TABLE IF EXISTS ${sql(tablename)} CASCADE`;
    });

    return(true);
}

export { migrateUp, migrateDown };