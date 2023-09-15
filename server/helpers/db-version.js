/**
 * First query to get the version of the database
 * @param {postgres.Sql} sql- The postgres sql object used for issuing query
 */
async function getPgVersion(sql) {
  const version = await sql`SELECT VERSION()`;
  return version;
}

export default getPgVersion;