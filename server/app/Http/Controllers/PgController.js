import getPgVersion from "../../../helpers/db-version.js";
import sql from "../../../config/db.js";

class PgController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  async getPgVersion() {
    const version = await getPgVersion(sql);
    //res.render("/"); causees error when not found
    this.res.json(version);
  }
}

export default PgController;
