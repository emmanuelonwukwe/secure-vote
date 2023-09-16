import express from "express";
import AppGlobalMiddlewares from "./app/Http/Middlewares/AppGlobalMiddlewares.js";
import PgController from "./app/Http/Controllers/PgController.js";

// The express object
const app = express();

//middlewares
new AppGlobalMiddlewares();

// Variables
const apiVersion = "/api/v1";


app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
