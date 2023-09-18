import { migrateUp, migrateDown } from "../../../database/dbMigrateTables.js";
import User from "../../Models/User.js";
import Controller from "./Controller.js";

class RegisterController extends Controller{
    /**
     * 
     * @param {object} data - The object of the user data to be inserted to the database
     */
    static async register(data){
       await migrateUp()
        const user = new User();
        await user.create(data);
    }
}

export default RegisterController;