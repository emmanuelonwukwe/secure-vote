import express from "express";
import RegisterController from "../app/Http/Controllers/RegisterController.js";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";

const router = express.Router();

// The registration route for new users
router.get("/signup", async (req, res) => {
  try {
    await RegisterController.register({
      first_name: "Edgar",
      last_name: "Gabriel",
      email: "edgar@gmail.com",
      phone: "09012345",
      role: "user",
      status: "active",
      password: "hashedpasswordkey",
    });

    res.status(200).json({
        message: "Successfully registered"
    });
  } catch (error) {
    handleCaughtErrorRes(error, res);
  }
});

// This api handles the login actions
router.get("/login", async (req, res) => {
  res.json({
    message: "Login controller output",
  });
});

export default router;
