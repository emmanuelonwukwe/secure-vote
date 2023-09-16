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