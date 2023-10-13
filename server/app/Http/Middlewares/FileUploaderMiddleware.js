import BaseMiddleware from "./BaseMiddleware.js"
import multer from "multer";
import fs from "fs";
import path from "path";

class FileUploaderMiddleware extends BaseMiddleware {

    /**
     * The function that handles the file upload action on the route
     * Example on the upload route, app.post("/upload", this.upload().single("fieldName"), (req, res) => {});
     */
    static upload() {
        // Configure multer to store uploaded files in a specific directory
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                const uploadDir = "uploads/profile-photos"
                if (!fs.existsSync(uploadDir)) {
                    // Create the storage directory
                    fs.mkdir(uploadDir, { recursive: true}, (error) => {})
                    // Do not upload so set the cb to have Error
                    //cb(new Error("file upload folder does not exist, try creating the folder named `" + uploadDir + "` on your server root"));
                }

                cb(null, uploadDir); // Files will be stored in the 'uploads' directory
            },

            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname); // Rename uploaded files
            },
        });

        // The helper to call single("fieldName"), array("fieldNameOfMultiple") middleware on the route
        const upload = multer({
            storage: storage,
            limits: { fileSize: 3000000 },
            fileFilter(req, file, cb) {
                const ext = path.extname(file.originalname).toLowerCase();
                if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".svg") {
                    cb(new Error("Only images can be uploaded"), false);
                } else {
                    cb(null, true);
                }
            },
        });

        return upload;
    }
}

export default FileUploaderMiddleware;