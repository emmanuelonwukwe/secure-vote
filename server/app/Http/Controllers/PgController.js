import getPgVersion from "../../../helpers/db-version.js";
import sql from "../../../config/db.js";

class PgController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  async getPgVersion() {
    try {
      const version = await getPgVersion(sql);
      //res.render("/"); causees error when not found
      this.res.send(version);
    } catch (error) {
      this.res.status(401).json({
        message: "Error occured",
        error: "Error occured " + error,
      });
    }
  }
}

export default PgController;
