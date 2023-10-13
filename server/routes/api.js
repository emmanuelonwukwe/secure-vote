import express from "express";
import PgController from "../app/Http/Controllers/PgController.js";
import ApiException from "../app/Exceptions/ApiException.js";
import handleCaughtErrorRes from "../helpers/caught-error-handler.js";
import AdminOnlyMiddleware from "../app/Http/Middlewares/AdminOnlyMiddleware.js";
import TokenController from "../app/Http/Controllers/TokenController.js";

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

// This endpoint helps to verify a jwt token sent from the front end
router.get("/verify-token", async (req, res) => {
    try {
        const token = req.headers.token;
        const payload = TokenController.verifyToken(token);

        // Respond with the user payload
        res.status(200).json({
            message: "Token user payload is in the user key",
            payload
        });
    } catch (error) {
        handleCaughtErrorRes(error, res)
    }
});

// This endpoint helps the admin to generate a jwt secret token
router.get("/generate-jwt-secret", AdminOnlyMiddleware.handle, async (req, res) => {
    try {
        const secret = PgController.generateJwtSecret();

        // Show the secret to the user
        res.json({
            message: "Your jwt secret is shown below",
            secret
        });
    } catch (error) {
        handleCaughtErrorRes(error, res)
    }
})

// This helps the admin to migrate the db tables
router.get("/create-db-tables", AdminOnlyMiddleware.handle, async (req, res) => {
    try {
        const pgController = new PgController(req, res);
        await pgController.createDatabaseTables();
        res.json({
            message: "Database tables created successfully"
        });
    } catch (error) {
        handleCaughtErrorRes(error, res)
    }
});

// This helps the admin to migrate the db tables
router.get("/drop-db-tables", AdminOnlyMiddleware.handle, async (req, res) => {
    try {
        const pgController = new PgController(req, res);
        pgController.dropDatabaseTables();
        res.json({
            message: "Database tables dropped successfully"
        });
    } catch (error) {
        handleCaughtErrorRes(error, res)
    }
});

// This is an unknown route
router.get("*", (req, res) => {
    res.json({
        message: "Unknown route"
    });
});


export default router;