import express from "express";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";
import MustVerifyTokenMiddleware from "../app/Http/Middlewares/MustVerifyToken.js";
import ElectionController from "../app/Http/Controllers/ElectionController.js";

const router = express.Router();

// The registration route for new users
router.post("/create-election-space", MustVerifyTokenMiddleware.handle, async (req, res) => {
  try {
    const electionData = req.body;
    const token = req.headers.token;

    await ElectionController.createSpace(electionData, token);

    res.status(200).json({
      message: "Election space successfully created",
    });
  } catch (error) {
    handleCaughtErrorRes(error, res);
  }
});

export default router;