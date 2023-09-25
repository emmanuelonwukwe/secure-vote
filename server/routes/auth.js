import express from "express";
import RegisterController from "../app/Http/Controllers/RegisterController.js";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";
import LoginController from "../app/Http/Controllers/LoginController.js";

const router = express.Router();

// The registration route for new users
router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;

    const token = await RegisterController.signup(userData);

    res.status(200).json({
      message: "Successfully registered",
      token: token,
    });
  } catch (error) {
    handleCaughtErrorRes(error, res);
  }
});

// The login route for all users
router.post("/login", async (req, res) => {
  console.log(req.headers)
  try {
    const userData = req.body;

    const token = await LoginController.authenticate(userData);

    res.status(200).json({
      message: "Successfully logged in",
      token: token,
    });
  } catch (error) {
    handleCaughtErrorRes(error, res);
  }
});

// router.get("/test", async (req, res) => {
//   try {
//     const response = await RegisterController.testApi();
//     res.status(200);
//     res.send(response);
//   } catch (error) {
//     handleCaughtErrorRes(error, res);
//   }
// });

export default router;
