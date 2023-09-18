import BaseModel from "./BaseModel.js";

class User extends BaseModel{
    // The name of the model table
    table = 'users';
}

export default User;