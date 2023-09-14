import sql from "./db.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

// Variables
const ServerPort = 3000;

//middlewares
app.use(cors({ origin: ["http://localhost:5173"] }));

// First query to get the version of the database
async function getPgVersion() {
    const version = await sql`SELECT VERSION()`;
    return version;
  }
  
  // This endpoint returns the version of the postgres
  app.get("/", async (req, res) => {
    try {
      const version = await getPgVersion();
      //res.render("/"); causees error when not found
      res.send(version);
    } catch (error) {
      res.send("Error occured");
    }
  });

  
// This is an unknown route
app.get("*", (req, res) => {
    res.send("Unknown route");
  });
  
  app.listen(ServerPort, () => {
    console.log("Server started at port " + ServerPort);
  });
