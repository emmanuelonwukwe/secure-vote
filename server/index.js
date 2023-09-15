import express from "express";
import AppGlobalMiddlewares from "./app/Http/Middlewares/AppGlobalMiddlewares.js";
import PgController from "./app/Http/Controllers/PgController.js";

// The express object
const app = express();

//middlewares
new AppGlobalMiddlewares();

// Variables
const apiVersion = "/api/v1";

// The entry default route
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to secured vote apis"
  })
});

// This endpoint returns the version of the postgres
app.get(`${apiVersion}/pg-version`, async (req, res) => {
  const pgController = new PgController(req, res);
  pgController.getPgVersion();
});

// This api handles the login actions
app.get(`${apiVersion}/login`, async (req, res) => {
  res.send({
    message: "Login controller output"
  });
});

// The Register route for the application
app.post("/login")
// This is an unknown route
app.get("*", (req, res) => {
  res.send("Unknown route");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
