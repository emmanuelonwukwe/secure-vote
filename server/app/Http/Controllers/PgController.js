import getPgVersion from "../../../helpers/db-version.js";
import sql from "../../../config/db.js";
import Controller from "./Controller.js";
import {migrateUp, migrateDown} from '../../../database/migrate-tables.js'

class PgController extends Controller {
  constructor(req, res) {
    super();
    this.req = req;
    this.res = res;
  }

  // This migrates the database tables
  async createDatabaseTables() {
    await migrateUp();
    //migrateDown()
  }

  // This drops the database tables
  dropDatabaseTables() {
    migrateDown()
  }

// This helps to get the postgress database version
  async getPgVersion() {
    const version = await getPgVersion(sql);
    //res.render("/"); causes error when not found
    this.res.json(version);
  }
}

export default PgController;
