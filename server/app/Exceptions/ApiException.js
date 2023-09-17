class ApiException extends Error {
    /**
     * 
     * @param {string} msg - The error message to be displayed
     * @param {string} res  - Express app route response
     * @param {integer} statusCode - The error status code
     */
    constructor(msg, statusCode = 400) {
        // First call the parent constructor
        super(msg);
        this.name = "ApiException";
        this.message = msg;
        this.statusCode = statusCode
    }
}

export default ApiException;