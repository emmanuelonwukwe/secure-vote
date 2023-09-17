import express from "express";
import PgController from "../app/Http/Controllers/PgController.js";
import ApiException from "../app/Exceptions/ApiException.js";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";
import AdminOnlyMiddleware from "../app/Http/Middlewares/AdminOnlyMiddleware.js";
import RegisterController from "../app/Http/Controllers/RegisterController.js";

const router = express.Router();

/**
 *  Here are the sub routes to be included with the index.js router middleware baseUrl;
 * 
 */
router.get("/", (req, res) => {
    try {
        if (req.ip == '0::1') {
            throw new ApiException("This Ip is barred from accessing this api", "502");
        }

        res.json({
            message: "Welcome to secure vote apis",
            ip: req.ip
        });
    } catch (error) {
        handleCaughtErrorRes(error, res);
    }
});

// This endpoint returns the version of the postgres
router.get("/pg-version", AdminOnlyMiddleware.handle, async (req, res) => {
    try {
        const pgController = new PgController(req, res);
        await pgController.getPgVersion();
    } catch (error) {
        handleCaughtErrorRes(error, res)
    }
});

// The registration route for new users
router.get("/signup", async (req, res) => {
    try {
        await RegisterController.register({ age: "not" });
    } catch (error) {
        handleCaughtErrorRes(error, res)
    }
})

// This api handles the login actions
router.get("/login", async (req, res) => {
    res.json({
        message: "Login controller output"
    });
});

// This is an unknown route
router.get("*", (req, res) => {
    res.json({
        message: "Unknown route"
    });
});

export default router;