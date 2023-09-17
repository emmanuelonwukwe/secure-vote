
import express from "express";
import SetAppGlobalMiddlewares from "./app/Http/Middlewares/SetAppGlobalMiddlewares.js";
import router from "./routes/api.js";

// The express object
const app = express();

//middlewares
new SetAppGlobalMiddlewares();

//app.use(AdminOnlyMiddleware.handle);

app.use("/api/v1", router);

// Start the express server at the designated port in the env file
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started at port " + process.env.SERVER_PORT);
});
