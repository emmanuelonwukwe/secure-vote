import Controller from "./Controller.js";
import multer from "multer";

class FileUploadController extends Controller {

    /**
     * The function that handles the file upload action
     */
    uploadFile() {
        // Configure multer to store uploaded files in a specific directory
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname); // Rename uploaded files
            },
        });

        const upload = multer({ storage: storage });

        // Serve static files (optional)
        //app.use(express.static('public'));
    }
}