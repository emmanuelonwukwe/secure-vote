import postgres from 'postgres';
import env from "dotenv";
env.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: "allow" }); // will use psql environment variables

export default sql;