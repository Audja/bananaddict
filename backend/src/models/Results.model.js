const { db } = require("./db");

async function getResults(id) {
  const [rows] = await db.query("SELECT * FROM resultats WHERE id = ?", [id]);
  return rows[0];
}

async function getResultsAll() {
  const [rows] = await db.query("SELECT * FROM resultats");

  return rows;
}

module.exports = {
  getResults,
  getResultsAll,
};
