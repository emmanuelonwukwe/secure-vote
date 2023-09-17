import sql from "../config/db.js";
import DBTables from "./dbTables.js";
import usersCreateTableQry from "./users.js";
import reset_passwordsCreateTableQry from "./reset-password.js";
import electionsCreateTableQry from "./elections.js";
import votesCreateTableQry from "./votes.js";

/**
 * This function is called to migrate the tables to the db.
 * Rember: Register the primary tables first before the referencing tables
 */ 
async function migrateUp() {
    await sql.begin( async (sql) => {
        // First query of the transaction
       await usersCreateTableQry(sql);

       // This query creates the elections table
       await electionsCreateTableQry(sql);

       // This query creates the votes table
       await votesCreateTableQry(sql);

       // This creates the reset passwords table
       await reset_passwordsCreateTableQry(sql);
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