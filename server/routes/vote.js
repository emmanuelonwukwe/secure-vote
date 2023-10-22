import express from "express";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";
import MustVerifyTokenMiddleware from "../app/Http/Middlewares/MustVerifyToken.js";
import VoteController from "../app/Http/Controllers/VoteController.js";

const router = express.Router();

// The route creates the election space for the manager
router.post(
  "/votes/create",
  MustVerifyTokenMiddleware.handle,
  async (req, res) => {
    try {
      const voteData = req.body;

      await VoteController.castVote(voteData);

      res.status(200).json({
        message: "Vote successfully cast",
      });
    } catch (error) {
      handleCaughtErrorRes(error, res);
    }
  }
);

export default router;
