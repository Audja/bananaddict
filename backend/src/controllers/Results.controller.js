const ResultModel = require("../models/Results.model");

async function get(req, res) {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }

  const results = await ResultModel.getResults(req.params.id);

  if (!results) {
    res.sendStatus(404);
    return;
  }

  res.json(results);
}

async function getAll(req, res) {
  const resultats = await ResultModel.getResultsAll();
  res.json(resultats);
}
module.exports = { get, getAll };
