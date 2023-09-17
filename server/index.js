
import express from "express";
import SetAppGlobalMiddlewares from "./app/Http/Middlewares/SetAppGlobalMiddlewares.js";
import router from "./routes/api.js";
import handleCaughtErrorRes from "./helpers/caught-error-handler.js";

// The express object
const app = express();

// Middlewares
new SetAppGlobalMiddlewares(app);

// Set the router
app.use("/api/v1", router);

// Express error listener middleware
app.use((error, req, res, next) => {
  handleCaughtErrorRes(error, res);
});

// Start the express server at the designated port in the env file
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
