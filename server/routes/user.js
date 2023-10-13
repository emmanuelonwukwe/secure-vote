import express from "express";
import FileUploaderMiddleware from "../app/Http/Middlewares/FileUploaderMiddleware.js";
import MustVerifyTokenMiddleware from "../app/Http/Middlewares/MustVerifyToken.js";
import UserController from "../app/Http/Controllers/UserController.js";

const router = express.Router();


// This handle file upload POST request to the server
router.post('/users/update/profile-photo',
    MustVerifyTokenMiddleware.handle,
    FileUploaderMiddleware.upload().single('profile_photo'), async (req, res) => {

        // The newly resigned user after update
        const { token, user } = await UserController.
            updateProfilePhoto(req.body.old_photo_basename, req.file.filename, req.headers.token);

        res.json({
            message: "Uploaded successfully",
            token,
            user,
            file: req.file,
            body: req.body
        })
    });

export default router;