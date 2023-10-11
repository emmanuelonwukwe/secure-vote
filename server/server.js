
import app from "./app.js";

// Start the express server at the designated port in the env file
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started at port " + process.env.SERVER_PORT);
  console.log("Node app environment: ", process.env.NODE_ENV);
});
