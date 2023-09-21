import express from "express";
import RegisterController from "../app/Http/Controllers/RegisterController.js";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";

const router = express.Router();

// The registration route for new users
router.post("/signup", async (req, res) => {
  try {
    const { userData } = req.body;

    await RegisterController.register(userData);

    res.status(200).json({
        message: "Successfully registered"
    });
  } catch (error) {
    handleCaughtErrorRes(error, res);
  }
});

// This api handles the login actions
router.post("/login", async (req, res) => {
  res.json({
    message: "Login controller output",
  });
});

export default router;
