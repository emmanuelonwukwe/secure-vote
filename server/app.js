import express from "express";
import SetAppGlobalMiddlewares from "./app/Http/Middlewares/SetAppGlobalMiddlewares.js";
import handleCaughtErrorRes from "./helpers/caught-error-handler.js";
import electionRouter from './routes/election.js'
import apiRouter from "./routes/api.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import voteRouter from "./routes/vote.js";

import path from "node:path";
import { fileURLToPath } from "node:url";

// The express object
const app = express();

// Middlewares
new SetAppGlobalMiddlewares(app);

// Set the router
const baseUrl = "/api/v1";
app.use(baseUrl, authRouter);
app.use(baseUrl, electionRouter);
app.use(baseUrl, userRouter);
app.use(baseUrl, voteRouter);

// The last router handles unknown API routes
app.use(baseUrl, apiRouter);

// This last route handle non api requests and redirect them to the static file to handle the routing
app.get("/*", (req, res) => {
  // Get this file name
  const filename = fileURLToPath(import.meta.url);

  // Get the directory name of this file
  const __dirname = path.dirname(filename);

  // Send the unknown requests to the built frontend ui so the router can handle the routing
  res.sendFile(__dirname + "/dist/index.html");
});

// Express error handler middleware
app.use((error, req, res, next) => {
  handleCaughtErrorRes(error, res);
  next();
});

export default app;