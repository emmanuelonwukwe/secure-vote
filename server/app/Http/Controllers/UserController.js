import Controller from "./Controller.js";
import sql from "../../../config/db.js";
import AuthController from "./AuthController.js";
import User from "../../Models/User.js";
import jwt from "jsonwebtoken";
import fs from "fs";

class UserController extends Controller {
    /**
     * 
     * @param {String} filename - The name of the new file to be stored on the database
     * @param {String} old_photo_basename - The name of the old phote on the db 
     * @returns 
     */
    static async updateProfilePhoto(old_photo_basename, filename, token) {
        // The authenticated user
        const authController = new AuthController(token);
        const authUserId = authController.getId();

        // Create user instance
        const user = new User();

        // Update the data on the database
        await user.update({
            profile_image: filename
        },
            sql`id = ${authUserId}`
        );

        // unlink the old photo from the server
        const old_photo_path = `uploads/profile-photos/${old_photo_basename}`;
        
        //console.log(old_photo_path);
        if (fs.existsSync(old_photo_path)) {
            fs.unlink(old_photo_path, (error) => {
                if (error) console.log("Unable to unlink");

                // File deleted success
            });
        }

        const payload = await this.resignUser(authUserId);
        return payload;
    }

    /**
     * This function helps to resign the user after any update is done on the user db
     * @param {int} authUserId - The authenticated user id basically from `AuthController($token)`
     */
    static async resignUser(authUserId) {
        // Create user instance
        const user = new User();

        const userRow = await user.where(sql`id = ${authUserId}`);
        const authUser = userRow[0];

        // Sign the authenticated user and return the token
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data: authUser,
            },
            secretKey
        );

        return { token, user: authUser };
    }
}

export default UserController;
