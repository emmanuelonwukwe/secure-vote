import crypto from 'crypto';

class Controller{
    constructor(){}
    // This function helps to generate jwt secret that will be stored in the .env file
    generateJwtSecret(){
        const jwtSecret = crypto.randomBytes(32).toString('base64');
        return jwtSecret;
    }
}

export default Controller;