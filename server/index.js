
import express from "express";
import SetAppGlobalMiddlewares from "./app/Http/Middlewares/SetAppGlobalMiddlewares.js";
import handleCaughtErrorRes from "./helpers/caught-error-handler.js";
import electionRouter from './routes/election.js'
import apiRouter from "./routes/api.js";
import authRouter from "./routes/auth.js";

// The express object
const app = express();

// Middlewares
new SetAppGlobalMiddlewares(app);

// Set the router
const baseUrl = "/api/v1";
app.use(baseUrl, authRouter);
app.use(baseUrl, electionRouter);

// The last router handles unknown routes
app.use(baseUrl, apiRouter);

// Express error listener middleware
app.use((error, req, res, next) => {
  handleCaughtErrorRes(error, res);
});

// Start the express server at the designated port in the env file
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
