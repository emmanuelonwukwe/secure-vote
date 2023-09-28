import express from "express";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";
import MustVerifyTokenMiddleware from "../app/Http/Middlewares/MustVerifyToken.js";
import ElectionController from "../app/Http/Controllers/ElectionController.js";
import ManagerOnlyMiddleware from "../app/Http/Middlewares/ManagerOnlyMiddleware.js";

const router = express.Router();

// The route creates the election space for the manager
router.post(
  "/elections/create",
  MustVerifyTokenMiddleware.handle,
  ManagerOnlyMiddleware.handle,
  async (req, res) => {
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
  }
);

// This gets the election spaces of a particular user
router.get(
  "/elections/my-spaces",
  MustVerifyTokenMiddleware.handle,
  ManagerOnlyMiddleware.handle,
  async (req, res) => {
    try {
      const token = req.headers.token;

      const electionSpaces = await ElectionController.getSpaces(token);

      res.status(200).json({
        message: "Election space successfully fetched",
        elections: electionSpaces,
      });
    } catch (error) {
      handleCaughtErrorRes(error, res);
    }
  }
);

// This route edits the election details
router.put(
  "/elections/update/:id",
  MustVerifyTokenMiddleware.handle,
  ManagerOnlyMiddleware.handle,
  async (req, res) => {
    try {
      const electionData = req.body;
      
      const { id } = req.params;
      const token = req.headers.token;

      await ElectionController.update(electionData, id, token);

      res.status(200).json({
        message: "Election successfully updated",
      });
    } catch (error) {
      handleCaughtErrorRes(error, res);
    }
  }
);

// This route deletes the election space of this id
router.delete(
  `/elections/delete/:id`,
  MustVerifyTokenMiddleware.handle,
  ManagerOnlyMiddleware.handle,
  async (req, res) => {
    try {
      const token = req.headers.token;
      const { id } = req.params;

      await ElectionController.delete(id, token);

      res.status(200).json({
        message: "Deleted successfully",
      });
    } catch (error) {
      handleCaughtErrorRes(error, res);
    }
  }
);

export default router;
