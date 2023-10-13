import BaseMiddleware from "./BaseMiddleware.js";
import allowedOrigins from "../../../config/cors.js"
import AdminOnlyMiddleware from "./AdminOnlyMiddleware.js";
import cors from "cors";
import { xss } from 'express-xss-sanitizer';
import { rateLimit } from 'express-rate-limit'

/**
 * The global app middlewares are registered here
 */
class SetAppGlobalMiddlewares extends BaseMiddleware{
    constructor(app){
        super(app);

        // Parse json to req.body
        app.use(this.express.json());
        app.use(this.express.urlencoded({extended: true}));

        // Bypass xss attack from req.body, req.query, req.headers and req.params
        app.use(xss());

        // Brute force attack handler to limit requests per i.p
        const allowlist = ['::1', '192.168.0.21'];

        // The limiter settings
        const limiter = rateLimit({
            message:  this.showRateLimitedMessage,
            windowMs: 15 * 60 * 1000, // 15 minutes
            limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
            standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers
            // store: ... , // Use an external store for more precise rate limiting
            skip: (req, res) => allowlist.includes(req.ip),
        })
        
        // Apply the rate limiting middleware to all requests
        app.use(limiter)

        // Set the cross origin policy
        app.use(cors({ origin: [...allowedOrigins] }));
        //app.use(AdminOnlyMiddleware.handle)

        // Add static file
        app.use(this.express.static("dist"));
        app.use("/uploads", this.express.static("uploads"));
    }

    // The message that fires when an Ip access is limited by too may requests
    async showRateLimitedMessage(req, res){
        res.status(429).json({
            message: "You have sent too many requests, wait for extra 15 minutes before you can continue"
        })
    }
}

export default SetAppGlobalMiddlewares;