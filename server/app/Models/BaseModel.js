import sql from "../../config/db.js";
import DBTables from "../../database/db-tables.js";
import ApiException from "../Exceptions/ApiException.js";

/**
 * This class implements crud fucnctionalities for the models
 */
class BaseModel {
    // The name of the model table to be specified by the child classes
    table = '';

    /**
     * This helps to create a resource to this model db table anytime
     * @param {object} data - The object of the model  to be inserted to db
     */
    async create(data) {
        // Only accept object to be inserted to the db
        if (typeof data !== "object" || Array.isArray(data)) {
            throw new ApiException("Data argument type for model create() must be object");
        }

        // Check if the model table is specified for this model
        this.#modelTableIsSpecified();

        // Check if the data keys exists in the global db tables array of this model
        Object.entries(data).forEach(([key, val]) => {
            if (!DBTables[this.table].includes(key)) {
                throw new ApiException(`Your data key '${key}' is not registered in the ${this.table} table of global database DBTables`);
            }
        });

        // Insert to the database this value and return the new inserted row
        const newModel = await sql`INSERT INTO ${sql(this.table)} ${sql(data)} RETURNING *`;

        return newModel;
    }

    /**
     * This helps to retrieve all data from this model db table
     */
    async all() {
        // Check if the model table is specified for this model
        this.#modelTableIsSpecified();

        const models = await sql`SELECT * FROM ${sql(this.table)}`;

        return models;
    }

    /**
     * This retrieve specific data based on the codition from the model table
     * @param { postgres.Sql } condition - The where condition for the data retrieval eg ...where(sql`email=${email}`)
     */
    async where(condition) {

        const models = await sql`SELECT * FROM ${sql(this.table)} WHERE ${condition}`;

        return models;
    }

    /**
     * This helps to updata a data
     * @param {object} data - The object of the model to be updated
     * @param {postgres.Sql} condition - The where condition of the model to be updated
     */
    async update(data, condition) {
        // Only accept object to be inserted to the db
        if (typeof data !== "object" || Array.isArray(data)) {
            throw new ApiException("Data argument type for model update() must be object");
        }

        // Check if the model table is specified for this model
        this.#modelTableIsSpecified();

        // Check if the data exists in the global db tables array of this model
        Object.entries(data).forEach(([key, val]) => {
            if (!DBTables[this.table].includes(key)) {
                throw new ApiException(`Your data key '${key}' is not registered in the ${sql(this.table)} table of global database DBTables`);
            }
        });

        const updatedModel = await sql`UPDATE ${sql(this.table)} SET ${sql(data)} WHERE ${condition} RETURNING *`;

        return updatedModel;
    }

    /**
     * Helps to delete a model from the table
     * @param {postgres.Sql} condition - The where condition of the model to be deleted
     */
    async delete(condition) {
        this.#modelTableIsSpecified();

        const deletedModel = await sql`DELETE FROM ${sql(this.table)} WHERE ${condition} RETURNING *`;

        return deletedModel;
    }

    /**
     * This function checks if model exists in the database based on the given condition
     * @param {postgres.Sql} condition - The clause that follows where statement of the sql query
     */
    async modelExists(condition) {
        this.#modelTableIsSpecified();

        const model = await sql`SELECT * FROM ${sql(this.table)} WHERE ${condition}`;

        if (model.length > 0) {
            return true
        }

        return false;
    }

    /**
     * This function counts the total from a table based on the condition
     * @param {postgres.Sql} condition 
     */
    async count(condition) {
        const count = await sql`SELECT COUNT(*) AS total FROM ${sql(this.table)} WHERE ${condition}`;

        return count[0].total;
    }

    /**
     * This function sums the column total from a table based on the condition
     * @param {string} col - The column to sum
     */
    async sum(col, condition) {
        const sum = await sql`SELECT SUM(${sql(col)}) AS total FROM ${sql(this.table)} WHERE ${condition}`;

        return sum[0].total;
    }

    /**
     * This function gets the minimum of the column from a table based on the condition
     * @param {string} col - The column to sum
     */
    async min(col, condition) {
        const min = await sql`SELECT MIN(${sql(col)}) AS minimum FROM ${sql(this.table)} WHERE ${condition}`;

        return min[0].minimum.toString();
    }

    /**
     * This function gets the maximum of the column from a table based on the condition
     * @param {string} col - The column to sum
     */
    async max(col, condition) {
        const max = await sql`SELECT MAX(${sql(col)}) as maxi FROM ${sql(this.table)} WHERE ${condition}`;

        return max[0].maxi.toString();
    }

    /**
     * This private function checks if table attribute is specified in the child class
     */
    #modelTableIsSpecified() {
        if (this.table == '') {
            throw new ApiException(`You did not specify the table attribute in ${this.constructor.name} model`)
        }

        // Check if it is an invalid table
        if (!DBTables.hasOwnProperty(this.table)) {
            throw new ApiException(`The ${this.constructor.name} model table '${this.table}' is not registered in the global DBTables of your database`);
        }

        return true;
    }
}

export default BaseModel;