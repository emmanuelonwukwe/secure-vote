import postgres from 'postgres';
import env from "dotenv";
env.config();

const DATABASE_URL = process.env.NODE_ENV == "development" ? process.env.DATABASE_URL_DEV : process.env.DATABASE_URL_PROD;
const sql =  process.env.NODE_ENV == "development" ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: "allow" }); // will use psql environment variables
console.log("Node app connected to DB:", DATABASE_URL);
export default sql;